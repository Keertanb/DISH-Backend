import cron from 'node-cron';
import FactoryService from '../services/factory.service.js';

const API_TIMEZONE = 'Asia/Kolkata';
const factoryService = new FactoryService();

// Machine inspection upcoming in next 5 days
const upcomingInspection = cron.schedule(
	'* 12 * * *',
	async () => {
		try {
			await factoryService.upcomingInspectionUsers();
		} catch (err) {
			console.error(
				'Upcoming Inspection last 5 days API Error:',
				err.response?.data || err.message
			);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

// Machine expiration data
const expireInspection = cron.schedule(
	'04 * * * *',
	async () => {
		try {
			await factoryService.nextInspectionOnMachine();
		} catch (err) {
			console.error('Upcoming Inspection API Error:', err.response?.data || err.message);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

// Under Inspection Schedule change flag
const beforeUnderInspectionSchedule = cron.schedule(
	'28 * * * *',
	async () => {
		try {
			await factoryService.beforeUnderInspectionSchedule();
		} catch (err) {
			console.error(
				'Before Pending Inspection last 15 days API Error:',
				err.response?.data || err.message
			);
		}
	},
	{ scheduled: false, timezone: API_TIMEZONE }
);

export default {
	startAll: () => {
		upcomingInspection.start();
		expireInspection.start();
		beforeUnderInspectionSchedule.start();
		console.log('start cron job');
	},
	stopAll: () => {
		upcomingInspection.stop();
		expireInspection.stop();
		beforeUnderInspectionSchedule.stop();
		console.log('stop cron job');
	},
};
