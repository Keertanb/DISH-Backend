import config from '../config/index.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: config.MAIL.mail,
		pass: config.MAIL.password,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

export async function sendMail({ to, subject, html, attachments = [] }) {
	await transporter.sendMail({
		from: `"Dish Portal" <${transporter.user}>`,
		// from: `"vidya-samiksha-kendra " <gujcosestablishment@gmail.com>`,
		to,
		subject,
		html,
		attachments,
	});
}
