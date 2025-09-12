CREATE OR ALTER PROCEDURE [dbo].[usp_ReviewCompetentOfficer]
    @CompetentOfficerId INT,
    @ReviewerId INT,
    @ReviewStatus NVARCHAR(50), -- 'Approved' or 'Rejected'
    @ReviewComments NVARCHAR(1000) = NULL,
    @ErrorMessage NVARCHAR(4000) = NULL OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Check if competent officer exists and is active
        IF NOT EXISTS (SELECT 1 FROM Users WHERE Id = @CompetentOfficerId AND IsActive = 1)
        BEGIN
            SET @ErrorMessage = 'Invalid or inactive competent officer.';
            THROW 50001, @ErrorMessage, 1;
        END
        
        -- Check if reviewer exists and is a DISH officer
        IF NOT EXISTS (
            SELECT 1 
            FROM Users u
            INNER JOIN UserRoles ur ON u.Id = ur.UserId
            INNER JOIN Roles r ON ur.RoleId = r.Id
            WHERE u.Id = @ReviewerId 
            AND u.IsActive = 1
            AND r.Name = 'DISH_OFFICER'
        )
        BEGIN
            SET @ErrorMessage = 'Invalid or unauthorized reviewer.';
            THROW 50002, @ErrorMessage, 1;
        END
        
        -- Get the district of the DISH officer (reviewer)
        DECLARE @DistrictId INT;
        
        SELECT @DistrictId = DistrictId 
        FROM UserDistricts 
        WHERE UserId = @ReviewerId;
        
        IF @DistrictId IS NULL
        BEGIN
            SET @ErrorMessage = 'Reviewer is not assigned to any district.';
            THROW 50003, @ErrorMessage, 1;
        END
        
        -- Verify the competent officer is in the same district as the reviewer
        IF NOT EXISTS (
            SELECT 1 
            FROM UserDistricts 
            WHERE UserId = @CompetentOfficerId 
            AND DistrictId = @DistrictId
        )
        BEGIN
            SET @ErrorMessage = 'Competent officer is not in the same district as the reviewer.';
            THROW 50004, @ErrorMessage, 1;
        END
        
        -- Update the competent officer's review status
        UPDATE Users
        SET 
            ReviewStatus = @ReviewStatus,
            ReviewComments = @ReviewComments,
            ReviewedBy = @ReviewerId,
            ReviewedAt = GETUTCDATE()
        WHERE Id = @CompetentOfficerId;
        
        -- Log the review action
        INSERT INTO UserAuditLogs (
            UserId,
            Action,
            ActionBy,
            ActionAt,
            Details
        )
        VALUES (
            @CompetentOfficerId,
            'REVIEW_' + UPPER(@ReviewStatus),
            @ReviewerId,
            GETUTCDATE(),
            JSON_OBJECT('reviewComments': @ReviewComments)
        );
        
        COMMIT TRANSACTION;
        RETURN 0; 
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;
            
        SET @ErrorMessage = ERROR_MESSAGE();
        RETURN -1; 
    END CATCH;
END;
