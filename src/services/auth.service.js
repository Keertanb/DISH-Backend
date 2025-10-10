import dotenv from 'dotenv';
// MODELS
import AuthModel from '../models/auth.model.js';

// UTILS
import logger from '../utils/logger.js';
import { sendMail } from '../utils/mail.js';

import crypto from 'crypto';
import bcrypt from 'bcrypt';

dotenv.config();
const authModel = new AuthModel();

function generatePassword() {
	const password = crypto.randomBytes(6).toString('base64').slice(0, 8);
	return password;
}

class AuthService {
	async factoryOwnerRegistration(data) {
		try {
			const password = generatePassword();

			const saltRounds = 10;
			const hashedPassword = await bcrypt.hash(password, saltRounds);

			// Save user with hashed password
			const factory = await authModel.factoryOwnerRegistration(data, hashedPassword);

			// Mail send (plain password)
			const { userId, email } = factory;
			await sendMail({
				to: email,
				subject: 'Factory Registration Credentials',
				html: `
				<p>Dear Factory Owner,</p>
				<p>Your factory owner registration has been <b>successfully completed</b>.</p>
				<p>Below are your login credentials:</p>
				<ul>
					<li>User ID: <b>${userId}</b></li>
					<li>Password: <b>${password}</b></li>
				</ul>
				<p>Please keep these credentials safe and do not share them with anyone.</p>
				<p>Regards,<br/>Support Team</p>
			`,
			});

			// Return data + plain password (for response if needed)
			return { ...factory, userPassword: password };
		} catch (err) {
			logger.error('Error in factoryOwnerRegistration service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async competentOfficerRegistration(data) {
		try {
			const password = generatePassword();
			const saltRounds = 10;
			const hashedPassword = await bcrypt.hash(password, saltRounds);

			const competent = await authModel.competentOfficerRegistration(data, hashedPassword);

			const { userId, email } = competent;
			await sendMail({
				to: email,
				subject: 'Competent Officer Registration Credentials',
				html: `
				<p>Dear Competent Officer,</p>
				<p>Your Competent Officer registration has been <b>successfully completed</b>.</p>
				<p>Below are your login credentials:</p>
				<ul>
					<li>User ID: <b>${userId}</b></li>
					<li>Password: <b>${password}</b></li>
				</ul>
				<p>Please keep these credentials safe and do not share them with anyone.</p>
				<p>Regards,<br/>Support Team</p>
			`,
			});

			return { ...competent, userPassword: password };
		} catch (err) {
			logger.error('Error in competentOfficerRegistration service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}

	async login(userId, userPassword) {
		try {
			if (!userId || !userPassword) {
				throw new Error('UserId ane Password required');
			}

			const login = await authModel.login(userId);

			if (!login || !login.userPassword) {
				throw new Error('Invalid UserId or Password');
			}

			const isMatch = await bcrypt.compare(userPassword, login.userPassword);
			if (!isMatch) {
				throw new Error('Invalid UserId or Password');
			}

			return {
				userId: login.userId,
				roleName: login.roleName,
				email: login.email,
				districtId: login.districtId,
				districtName: login.districtName,
				accountRenew: login.isRenew,
			};
		} catch (err) {
			logger.error('Error in login service:', { message: err.message, stack: err.stack });
			throw err;
		}
	}

	async forgotPassword(userId, email) {
		const token = crypto.randomBytes(32).toString('hex');
		const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

		const user = await authModel.generateResetToken(userId, email, token, expiry);

		if (!user || !user[0] || !user[0].userId) {
			throw new Error('User ID and Email do not match');
		}

		// const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
		const resetLink = `http://localhost:5173/reset-password?token=${token}`;

		// Send email
		await sendMail({
			to: email,
			subject: 'Reset your password',
			html: `
        	<p>Hello ${userId},</p>
			<p>Click the button below to reset your password:</p>
			<p>
			<a href="${resetLink}" style="
				display: inline-block;
				padding: 10px 20px;
				background-color: #1a73e8;
				color: white;
				text-decoration: none;
				border-radius: 5px;
				font-weight: bold;
			">Reset Password</a>
			</p>
			<p>If the button doesn’t work, copy this link into your browser:</p>
			// <p>${resetLink}</p>
			<p>This link expires in 1 hour.</p>
		`,
		});

		return { message: 'Reset link sent to your email' };
	}

	async resetPassword(token, newPassword) {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

		const result = await authModel.resetPassword(token, hashedPassword);

		if (!result || !result[0] || result[0].Success === 0) {
			throw new Error('Invalid or expired token');
		}

		return { message: 'Password reset successfully' };
	}

	async renewPauseCompetentOfficer(userId, email) {
		try {
			const competent = await authModel.renewPauseCompetentOfficer(userId, email);

			const { userId: dbUserId, email: dbEmail } = competent;
			await sendMail({
				to: dbEmail,
				subject: 'Competent Officer Renewal Application Confirmation',
				html: `
				<p>Dear Competent Officer,</p>
				<p>We’re pleased to inform you that your <b>renewal application request has been successfully submitted</b>.</p>
				<p>Our team will review your details shortly and notify you once the renewal process is completed.</p>
				<p>Thank you for your continued service and cooperation.</p>
				<p>Best regards,<br/>Support Team</p>
			`,
			});

			return competent;
		} catch (err) {
			logger.error('Error in renewCompetentOfficer service:', {
				message: err.message,
				stack: err.stack,
			});
			throw err;
		}
	}
}

export default AuthService;
