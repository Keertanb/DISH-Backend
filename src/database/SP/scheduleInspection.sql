CREATE OR ALTER PROCEDURE [dbo].[usp_ScheduleInspection]
    @InspectionDate DATETIME,
    @MachineType NVARCHAR(100),
    @CompetentOfficerId INT,
    @FactoryId INT,
    @ScheduledBy INT,
    @InspectionId INT OUTPUT,
    @ErrorMessage NVARCHAR(4000) = NULL OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION;
        
        -- Check if factory exists and is active
        IF NOT EXISTS (SELECT 1 FROM Factories WHERE Id = @FactoryId AND IsActive = 1)
        BEGIN
            SET @ErrorMessage = 'Invalid or inactive factory.';
            THROW 50001, @ErrorMessage, 1;
        END
        
        -- Check if officer exists and is active
        IF NOT EXISTS (SELECT 1 FROM Users WHERE Id = @CompetentOfficerId AND IsActive = 1)
        BEGIN
            SET @ErrorMessage = 'Invalid or inactive competent officer.';
            THROW 50002, @ErrorMessage, 1;
        END
        
        -- Check if the officer is available on the scheduled date
        IF EXISTS (
            SELECT 1 
            FROM Inspections 
            WHERE CompetentOfficerId = @CompetentOfficerId 
            AND CONVERT(DATE, InspectionDate) = CONVERT(DATE, @InspectionDate)
            AND Status NOT IN ('Completed', 'Cancelled')
        )
        BEGIN
            SET @ErrorMessage = 'The selected officer is not available on the specified date.';
            THROW 50003, @ErrorMessage, 1;
        END
        
        -- Insert the inspection record
        INSERT INTO Inspections (
            FactoryId,
            InspectionDate,
            MachineType,
            CompetentOfficerId,
            Status,
            CreatedBy,
            CreatedAt,
            IsActive
        )
        VALUES (
            @FactoryId,
            @InspectionDate,
            @MachineType,
            @CompetentOfficerId,
            'Scheduled',
            @ScheduledBy,
            GETUTCDATE(),
            1
        );
        
        -- Get the newly created inspection ID
        SET @InspectionId = SCOPE_IDENTITY();
        
        -- Log the scheduling
        INSERT INTO InspectionLogs (
            InspectionId,
            Status,
            ChangedBy,
            ChangedAt,
            Notes
        )
        VALUES (
            @InspectionId,
            'Scheduled',
            @ScheduledBy,
            GETUTCDATE(),
            'Inspection scheduled successfully.'
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
