import PDFDocument from 'pdfkit';
import path from 'path';
import { fileURLToPath } from 'url';

export function generateSuspensionPDF(data) {
	return new Promise((resolve, reject) => {
		try {
			const doc = new PDFDocument({ size: 'A4', margin: 72 });

			const buffers = [];
			doc.on('data', buffers.push.bind(buffers));
			doc.on('end', () => {
				const finalBuffer = Buffer.concat(buffers);
				resolve(finalBuffer); // ✅ PROPER BUFFER RETURN
			});
			doc.on('error', reject);

			const __filename = fileURLToPath(import.meta.url);
			const __dirname = path.dirname(__filename);
			const fontPath = path.join(__dirname, '../fonts/NotoSansGujarati-Regular.ttf');

			doc.registerFont('Gujarati', fontPath);
			doc.font('Gujarati');

			const { name, firstWarningDate, temporarySuspendDate, finalSuspendDate } = data;

			doc.fontSize(11);
			doc.text(`તા. ${finalSuspendDate}`, { align: 'right' });

			doc.moveDown(2);
			doc.text(`પ્રતિશ્રી,`);
			doc.text(name);
			doc.moveDown(2);

			doc.fontSize(12).text('વિષય : કાયમી સસ્પેન્શન બાબતે', {
				align: 'center',
				underline: true,
			});

			doc.moveDown(1);
			doc
				.fontSize(11)
				.text(`તા. ${firstWarningDate} ના રોજ પ્રથમ ચેતવણી અપાઈ હતી.`, { align: 'justify' });

			doc.moveDown(1);
			doc.text(`તા. ${temporarySuspendDate} ના રોજ ૬ મહિના માટે સસ્પેન્શન અપાયું હતું.`, {
				align: 'justify',
			});

			doc.moveDown(1);
			doc.text(`તા. ${finalSuspendDate} થી કાયમી રીતે સસ્પેન્શન લાગુ કરવામાં આવે છે.`, {
				align: 'justify',
			});

			doc.moveDown(3);
			doc.text('નિયામક', { align: 'right' });

			doc.end();
		} catch (err) {
			reject(err);
		}
	});
}

// export function generateSuspensionPDF({
// 	name,
// 	firstWarningDate,
// 	temporarySuspendDate,
// 	finalSuspendDate,
// }) {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			const doc = new PDFDocument({ size: 'A4', margin: 72 });

// 			const buffers = [];
// 			doc.on('data', buffers.push.bind(buffers));
// 			doc.on('end', () => {
// 				const finalBuffer = Buffer.concat(buffers);
// 				resolve(finalBuffer); // ✅ Correct Buffer Return
// 			});
// 			doc.on('error', reject);

// 			// ✅ FONT PATH
// 			const __filename = fileURLToPath(import.meta.url);
// 			const __dirname = path.dirname(__filename);
// 			const fontPath = path.join(__dirname, '../fonts/NotoSansGujarati-Regular.ttf');

// 			// ✅ REGISTER GUJARATI FONT
// 			doc.registerFont('Gujarati', fontPath);
// 			doc.font('Gujarati');

// 			// =========================
// 			// ✅ HEADER
// 			// =========================
// 			doc.fontSize(11);
// 			doc.text('ક્રમાંક: ડીઆઈએસએચ/સસ્પેન્શન/૨૦૨૫/', { align: 'right' });
// 			doc.text('નિયામક, ઔદ્યોગિક સલામતી અને સ્વાસ્થ્ય કચેરી,', { align: 'right' });
// 			doc.text('શ્રમ ભવન, ખાનપુર, અમદાવાદ - ૩૮૦૦૦૧', { align: 'right' });
// 			doc.moveDown(0.5);
// 			doc.text(`તા. ${finalSuspendDate}`, { align: 'right' });

// 			doc.moveDown(2);

// 			// =========================
// 			// ✅ RECIPIENT
// 			// =========================
// 			doc.fontSize(11);
// 			doc.text('પ્રતિશ્રી,');
// 			doc.text(name || '...............................');
// 			doc.moveDown(2);

// 			// =========================
// 			// ✅ SUBJECT
// 			// =========================
// 			doc.fontSize(12).text('વિષય : વારંવાર શિસ્તભંગ બદલ કાયમી સસ્પેન્શન બાબતે', {
// 				align: 'center',
// 				underline: true,
// 			});

// 			doc.moveDown(2);
// 			doc.fontSize(11);

// 			// =========================
// 			// ✅ BODY CONTENT (YOUR GUJARATI TEXT)
// 			// =========================
// 			doc.text(
// 				`તા. ${firstWarningDate} ના રોજ આપને પ્રથમવાર લેખિત ચેતવણી આપવામાં આવી હતી. ત્યારબાદ પણ આપ દ્વારા ફરી તે જ પ્રકારની ભૂલ કરવામાં આવી હોવાનું નોંધાયું હતું.`,
// 				{ align: 'justify', lineGap: 2 }
// 			);

// 			doc.moveDown(1);

// 			doc.text(
// 				`તા. ${temporarySuspendDate} ના રોજ આપને ૬ (છ) મહિના માટે અસ્થાયી સસ્પેન્શન કરવામાં આવ્યું હતું તથા અંતિમ તક પણ આપવામાં આવી હતી. તેમ છતાં આપના વર્તનમાં કોઈ સુધારો નોંધાયો નથી.`,
// 				{ align: 'justify', lineGap: 2 }
// 			);

// 			doc.moveDown(1);

// 			doc.text(
// 				`નિયામકશ્રીના આદેશ મુજબ તા. ${finalSuspendDate} થી કાયમી રીતે આપને સેવા પરથી સસ્પેન્ડ કરવામાં આવે છે. આ આદેશ તાત્કાલિક અસરથી અમલમાં આવશે તથા આ નિર્ણય અંતિમ ગણાશે.`,
// 				{ align: 'justify', lineGap: 2 }
// 			);

// 			doc.moveDown(3);

// 			// =========================
// 			// ✅ SIGNATURE
// 			// =========================
// 			doc.text('નિયામક', { align: 'right' });
// 			doc.text('ઔદ્યોગિક સલામતી અને સ્વાસ્થ્ય', { align: 'right' });
// 			doc.text('ગુજરાત રાજ્ય, અમદાવાદ', { align: 'right' });

// 			doc.end();
// 		} catch (err) {
// 			reject(err);
// 		}
// 	});
// }
