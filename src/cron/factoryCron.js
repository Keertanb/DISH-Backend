import cron from 'node-cron';
import axios from 'axios';

const API_TIMEZONE = 'Asia/Kolkata';

const upcomingInspection = cron.schedule(
	'* 12 * * *',
	async () => {
		try {
			const response = await axios.post('http://localhost:8000/api/v1/factory/upcoming-inspection');
			console.log('Upcoming Inspection last 5 days API Called:', response.data);
		} catch (err) {
			console.error(
				'Upcoming Inspection last 5 days API Error:',
				err.response?.data || err.message
			);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

const expireInspection = cron.schedule(
	'04 * * * *',
	async () => {
		try {
			const response = await axios.post('http://localhost:8000/api/v1/factory/expire-inspection');
			console.log('Upcoming Inspection API Called:', response.data);
		} catch (err) {
			console.error('Upcoming Inspection API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

const beforePendingInspection = cron.schedule(
	'8 * * * *',
	async () => {
		try {
			const response = await axios.post(
				'http://localhost:8000/api/v1/factory/before-pending-inspection'
			);
			console.log('Before Pending  Inspection last 15 days API Called:', response.data);
		} catch (err) {
			console.error(
				'Before Pending Inspection last 15 days API Error:',
				err.response?.data || err.message
			);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

const demo = cron.schedule(
	'* * * * *',
	async () => {
		try {
			console.log('Upcoming Inspection API Called:');
		} catch (err) {
			console.error('Upcoming Inspection API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

export default {
	startAll: () => {
		upcomingInspection.start();
		expireInspection.start();
		beforePendingInspection.start();
		demo.start();
		console.log('start cron job');
	},
	stopAll: () => {
		upcomingInspection.stop();
		expireInspection.stop();
		beforePendingInspection.stop();
		demo.stop();
		console.log('stop cron job');
	},
};
