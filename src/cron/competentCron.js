import cron from 'node-cron';
import axios from 'axios';

const API_TIMEZONE = 'Asia/Kolkata';

const competentBeforeExpiry = cron.schedule(
	'36 * * * *',
	async () => {
		try {
			const response = await axios.post(
				'http://localhost:8000/api/v1/competent/competent-before-expiry-notification'
			);
			console.log('Competent before Expiry API Called:', response.data);
		} catch (err) {
			console.error('Competent before Expiry API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

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
	'51 * * * *',
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
		competentBeforeExpiry.start();
		competentExpiry.start();
		competentExpiryPause.start();
		console.log('start competent cron job');
	},
	stopAll: () => {
		competentBeforeExpiry.stop();
		competentExpiry.stop();
		competentExpiryPause.stop();
		console.log('stop competent cron job');
	},
};
