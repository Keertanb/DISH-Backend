import nodemailer from 'nodemailer';

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
});

export async function sendMail({ to, subject, html }) {
	await transporter.sendMail({
		// from: `"Factory Portal" <${oldeal2k23@gmail.com}>`,
		from: `"Factory Portal" <oldeal2k23@gmail.com>`,
		to,
		subject,
		html,
	});
}
