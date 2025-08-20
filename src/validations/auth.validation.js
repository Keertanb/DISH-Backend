const Joi = require('joi');

/**
 * Validation schemas for authentication routes
 */

// Login validation schema
exports.login = {
    body: Joi.object({
        userName: Joi.string().required().messages({
            'string.empty': 'Username is required',
            'any.required': 'Username is required'
        }),
        password: Joi.string().required().messages({
            'string.empty': 'Password is required',
            'any.required': 'Password is required'
        }),
        isForcedLogin: Joi.boolean().default(false)
    })
};

// Refresh token validation schema
exports.refreshToken = {
    body: Joi.object({
        refreshToken: Joi.string().required().messages({
            'string.empty': 'Refresh token is required',
            'any.required': 'Refresh token is required'
        })
    })
};

// Change password validation schema
exports.changePassword = {
    body: Joi.object({
        currentPassword: Joi.string().required().messages({
            'string.empty': 'Current password is required',
            'any.required': 'Current password is required'
        }),
        newPassword: Joi.string()
            .min(8)
            .required()
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
            .messages({
                'string.empty': 'New password is required',
                'any.required': 'New password is required',
                'string.min': 'Password must be at least 8 characters long',
                'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
            }),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({
            'any.only': 'Passwords do not match',
            'any.required': 'Please confirm your new password'
        })
    })
};

// Forgot password request validation
exports.forgotPassword = {
    body: Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'Please provide a valid email address',
            'string.empty': 'Email is required',
            'any.required': 'Email is required'
        })
    })
};

// Reset password validation
exports.resetPassword = {
    body: Joi.object({
        token: Joi.string().required().messages({
            'string.empty': 'Reset token is required',
            'any.required': 'Reset token is required'
        }),
        newPassword: Joi.string()
            .min(8)
            .required()
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
            .messages({
                'string.empty': 'New password is required',
                'any.required': 'New password is required',
                'string.min': 'Password must be at least 8 characters long',
                'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
            }),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({
            'any.only': 'Passwords do not match',
            'any.required': 'Please confirm your new password'
        })
    })
};
