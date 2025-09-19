import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'DISH_PORTAL_JWT';

export const createToken = (data) => jwt.sign({ data }, secretKey);

export const verifyToken = (token) => jwt.verify(token, secretKey).data;

export const jwtMiddleware = (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (typeof token === 'undefined') {
			return res.send({
				success: false,
				message: 'Invalid token',
			});
		}

		const jwtToken = token.split(' ')[1];
		if (typeof jwtToken === 'undefined') {
			return res.send({
				success: false,
				message: 'Invalid token',
			});
		}

		const data = verifyToken(jwtToken);
		req.data = data;
		next();
	} catch (error) {
		res.send({
			success: false,
			message: 'Invalid token',
		});
	}
};
