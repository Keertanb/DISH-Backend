import cron from 'node-cron';
import AuthModel from '../models/auth.model';

const API_TIMEZONE = 'Asia/Kolkata';
const authModel = new AuthModel();

const autoLogoutUsers = cron.schedule(
	'* * * * *',
	async () => {
		try {
			await authModel.autoLogoutUsers();
		} catch (err) {
			console.error('auth Not review:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

export default {
	startAll: () => {
		autoLogoutUsers.start();
		console.log('start auth cron job');
	},
	stopAll: () => {
		autoLogoutUsers.stop();
		console.log('stop auth cron job');
	},
};
