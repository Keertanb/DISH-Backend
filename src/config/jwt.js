import jwt from 'jsonwebtoken';
import AuthModel from '../models/auth.model.js';

const authModel = new AuthModel();
const secretKey = 'DISH_PORTAL_JWT';

export const createToken = (data) => jwt.sign({ data }, secretKey);

export const verifyToken = (token) => jwt.verify(token, secretKey)?.data;

export const jwtMiddleware = async (req, res, next) => {
	try {
		const header = req.headers.authorization;

		if (!header || !header.startsWith('Bearer ')) {
			return res.status(401).send({
				success: false,
				message: 'Invalid token format (Bearer missing)',
			});
		}

		const jwtToken = header.split(' ')[1];

		const data = verifyToken(jwtToken);

		const user = await authModel.login(data?.userId);

		if (!user) {
			return res.status(401).send({
				success: false,
				message: 'User not found',
			});
		}

		if (user.isForceLogout == 1) {
			return res.status(401).send({
				success: false,
				message: 'You are force logged out',
			});
		}

		if (user.token !== jwtToken) {
			return res.status(401).send({
				success: false,
				message: 'Token mismatch (Token Invalid)',
			});
		}

		req.data = data;
		next();
	} catch (error) {
		console.log('JWT ERROR =>', error.message);
		return res.status(401).send({
			success: false,
			message: 'Invalid token',
		});
	}
};
