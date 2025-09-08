// MODELS
import AuthModel from '../models/auth.model.js';

// UTILS
import logger from '../utils/logger.js';

import crypto from 'crypto';
import { sendMail } from '../utils/mail.js';

const authModel = new AuthModel();
function generatePassword() {
	const password = crypto.randomBytes(8).toString('base64');
	const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
	return { password, hashedPassword };
}
class AuthService {
	async factoryOwnerRegistration(data) {
		try {
			// const password = crypto.randomBytes(8).toString('base64');
			const { password, hashedPassword } = generatePassword();
			const factory = await authModel.factoryOwnerRegistration(data, hashedPassword);

			// Mail send
			const { userId, email } = factory;
			const encodedPassword = Buffer.from(password).toString('base64');
			await sendMail({
				to: email,
				subject: 'Factory Registration Credentials',
				html: `
					<p>Dear Factory Owner,</p>
					<p>Your factory owner registration has been <b>successfully completed</b>.</p>
					<p>Below are your login credentials:</p>
					<ul>
					<li>User ID: <b>${userId}</b></li>
					<li>Password: <b>${encodedPassword}</b></li>
					</ul>
					<p>Please keep these credentials safe and do not share them with anyone.</p>
					<p>Regards,<br/>Support Team</p>
				`,
			});

			return { ...factory, userPassword: encodedPassword };
		} catch (err) {
			logger.error('Error in factoryOwnerRegistration service:', { err });
			throw err;
		}
	}

	async competentOfficerRegistration(data) {
		try {
			const { password, hashedPassword } = generatePassword();
			const competent = await authModel.competentOfficerRegistration(data, hashedPassword);

			// Mail send
			const { userId, email } = competent;
			const encodedPassword = Buffer.from(password).toString('base64');
			await sendMail({
				to: email,
				subject: 'Competent Officer Registration Credentials',
				html: `
					<p>Dear Competent Officer,</p>
					<p>Your Competent Officer registration has been <b>successfully completed</b>.</p>
					<p>Below are your login credentials:</p>
					<ul>
					<li>User ID: <b>${userId}</b></li>
					<li>Password: <b>${encodedPassword}</b></li>
					</ul>
					<p>Please keep these credentials safe and do not share them with anyone.</p>
					<p>Regards,<br/>Support Team</p>
				`,
			});
			return { ...competent, userPassword: encodedPassword };
		} catch (err) {
			logger.error('Error in competentOfficerRegistration service:', { err });
			throw err;
		}
	}

	async login(userId, userPassword) {
		try {
			if (!userId || !userPassword) {
				throw new Error('UserId ane Password required');
			}

			const login = await authModel.login(userId);

			if (!login) {
				throw new Error('Invalid UserId or Password');
			}

			const isPasswordValid = login.userPassword === userPassword;

			if (!isPasswordValid) {
				throw new Error('Invalid UserId or Password');
			}

			return {
				userId: login.userId,
				roleName: login.roleName,
				districtId: login.districtId,
			};
		} catch (err) {
			logger.error('Error in login service:', { err });
			throw err;
		}
	}
}

export default AuthService;
