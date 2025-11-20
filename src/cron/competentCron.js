import cron from 'node-cron';
import CompetentService from '../services/competent.service.js';

const API_TIMEZONE = 'Asia/Kolkata';
const competentService = new CompetentService();

// const competentBeforeExpiry = cron.schedule(
// 	'36 * * * *',
// 	async () => {
// 		try {
// 			await competentService.competentBeforeExpiry();
// 		} catch (err) {
// 			console.error('Competent before Expiry API Error:', err.response?.data || err.message);
// 		}
// 	},
// 	{ scheduled: false, timezone: API_TIMEZONE }
// );

const competentExpiry = cron.schedule(
	'12 * * * *',
	async () => {
		try {
			await competentService.competentExpiryEnd();
		} catch (err) {
			console.error('Competent Expiry API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

const competentExpiryPause = cron.schedule(
	'51 * * * *',
	async () => {
		try {
			await competentService.competentExpiryPauseEnd();
		} catch (err) {
			console.error('Competent Expiry Pause API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

export default {
	startAll: () => {
		// competentBeforeExpiry.start();
		competentExpiry.start();
		competentExpiryPause.start();
		console.log('start competent cron job');
	},
	stopAll: () => {
		// competentBeforeExpiry.stop();
		competentExpiry.stop();
		competentExpiryPause.stop();
		console.log('stop competent cron job');
	},
};
