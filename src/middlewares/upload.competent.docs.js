import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'uploads', 'competent-documents');

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDir);
	},

	filename: (req, file, cb) => {
		const userId = req.data?.userId;
		if (!userId) {
			return cb(new Error('User ID not found in token during file upload'));
		}

		const ext = path.extname(file.originalname).toLowerCase();
		const base = path.basename(file.originalname, ext);
		const newName = `${userId}_${base}-${Date.now()}${ext}`;

		cb(null, newName);
	},
});

const fileFilter = (req, file, cb) => {
	const allowedExts = ['.pdf'];
	const ext = path.extname(file.originalname).toLowerCase();

	if (!allowedExts.includes(ext)) {
		return cb(new Error('Only PDF files are allowed!'), false);
	}
	cb(null, true);
};

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
	{ name: 'medicalCertificate', maxCount: 1 },
	{ name: 'experienceDocument', maxCount: 1 },
	{ name: 'educationDocument', maxCount: 1 },
	{ name: 'infrastructureDocument', maxCount: 1 },
	{ name: 'dateOfBirthDocument', maxCount: 1 },
]);

export default uploadCompetentDocs;
