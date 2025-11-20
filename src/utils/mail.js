import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		// user: process.env.MAIL_USER,
		// pass: process.env.MAIL_PASS,

		user: 'oldeal2k23@gmail.com',
		pass: 'qhlg qfkq ywjy kegh',

		// vidya samiksha kendra mail credential
		// user: 'gujcosestablishment@gmail.com',
		// pass: 'nsjk jqgh soji quxk',
	},
	tls: {
		rejectUnauthorized: false,
	},
});

export async function sendMail({ to, subject, html, attachments = [] }) {
	await transporter.sendMail({
		from: `"Factory Portal" <${process.env.MAIL_USER}>`,
		// from: `"vidya-samiksha-kendra " <gujcosestablishment@gmail.com>`,
		to,
		subject,
		html,
		attachments,
	});
}
