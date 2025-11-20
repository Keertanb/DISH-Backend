import cron from 'node-cron';
import DishService from '../services/dish.service.js';

const API_TIMEZONE = 'Asia/Kolkata';
const dishService = new DishService();

const notReviewCompetentPerson = cron.schedule(
	'43 * * * *',
	async () => {
		try {
			await dishService.notReviewCompetentPerson();
		} catch (err) {
			console.error('Competent Not review:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

export default {
	startAll: () => {
		notReviewCompetentPerson.start();
		console.log('start dish cron job');
	},
	stopAll: () => {
		notReviewCompetentPerson.stop();
		console.log('stop dish cron job');
	},
};
