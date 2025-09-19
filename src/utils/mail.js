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
	},
	tls: {
		rejectUnauthorized: false,
	},
});

export async function sendMail({ to, subject, html }) {
	await transporter.sendMail({
		// from: `"Factory Portal" <${process.env.MAIL_USER}>`,
		from: `"Factory Portal" <oldeal2k23@gmail.com>`,
		to,
		subject,
		html,
	});
}
