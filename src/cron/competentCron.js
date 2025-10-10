import cron from 'node-cron';
import axios from 'axios';

const API_TIMEZONE = 'Asia/Kolkata';

const competentExpiry = cron.schedule(
	'12 * * * *',
	async () => {
		try {
			const response = await axios.post(
				'http://localhost:8000/api/v1/competent/competent-expiry-end'
			);
			console.log('Competent Expiry API Called:', response.data);
		} catch (err) {
			console.error('Competent Expiry API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

const competentExpiryPause = cron.schedule(
	'* 12 * * *',
	async () => {
		try {
			const response = await axios.post(
				'http://localhost:8000/api/v1/competent/competent-expiry-pause-end'
			);
			console.log('Competent Expiry Pause API Called:', response.data);
		} catch (err) {
			console.error('Competent Expiry Pause API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

export default {
	startAll: () => {
		competentExpiry.start();
		competentExpiryPause.start();
		console.log('start competent cron job');
	},
	stopAll: () => {
		competentExpiry.stop();
		competentExpiryPause.stop();
		console.log('stop competent cron job');
	},
};
