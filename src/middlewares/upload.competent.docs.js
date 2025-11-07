import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'uploads', 'competent-documents');

console.log('Upload Directory:', uploadDir);

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

async function getUserId(req) {
	console.log('Request Body in getUserId:', req.body);
	return req.body?.userId || req.query?.userId || req.headers['userId'] || null;
}

console.log(getUserId, 'getUserId function');

// Storage configuration
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDir);
	},
	filename: async (req, file, cb) => {
		try {
			const userId = await getUserId(req);
			if (!userId) {
				return cb(new Error('User ID missing — cannot save file.'));
			}
			const ext = path.extname(file.originalname).toLowerCase();
			const base = path.basename(file.originalname, ext);
			const newName = `${userId}_${base}-${Date.now()}${ext}`;
			cb(null, newName);
		} catch (error) {
			cb(error);
		}
	},
});

// File type filter
const fileFilter = (req, file, cb) => {
	const allowedExts = ['.pdf'];
	const ext = path.extname(file.originalname).toLowerCase();
	if (!allowedExts.includes(ext)) {
		return cb(new Error('Only PDF file are allowed!'), false);
	}
	cb(null, true);
};

// Create multer instance
const uploadCompetentDocs = multer({
	storage,
	fileFilter,
	limits: { fileSize: 5 * 1024 * 1024 },
}).fields([
	{ name: 'pressureVesselOrPlantDocument', maxCount: 1 },
	{ name: 'hoistAndLiftsDocument', maxCount: 1 },
	{ name: 'dustFumeExtractionSystemDocument', maxCount: 1 },
	{ name: 'powerPressSafetyDevicesDocument', maxCount: 1 },
	{ name: 'waterSealedGasHolderDocument', maxCount: 1 },
	{ name: 'liftingMachinesChainsRopesDocument', maxCount: 1 },
	{ name: 'ovenAndDriersDocument', maxCount: 1 },
	{ name: 'centrifugeMachineDocument', maxCount: 1 },
	{ name: 'thermicFluidHeaterDocument', maxCount: 1 },
	{ name: 'confinedSpaceDocument', maxCount: 1 },
	{ name: 'stabilityDocument', maxCount: 1 },
	{ name: 'cv', maxCount: 1 },
]);

export default uploadCompetentDocs;
