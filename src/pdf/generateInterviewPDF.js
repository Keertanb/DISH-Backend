import PDFDocument from 'pdfkit';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

export function generateInterviewPDF({
	name,
	address,
	interviewDate,
	interviewTime,
	applicationDate,
	factoryAct,
}) {
	return new Promise((resolve, reject) => {
		try {
			const doc = new PDFDocument({ size: 'A4', margin: 72 });
			const buffers = [];

			doc.on('data', buffers.push.bind(buffers));
			doc.on('end', () => resolve(Buffer.concat(buffers)));

			// Register Gujarati font
			const __filename = fileURLToPath(import.meta.url);
			const __dirname = path.dirname(__filename);
			const fontPath = path.join(__dirname, '../fonts/NotoSansGujarati-Regular.ttf');
			doc.registerFont('Gujarati', fontPath);

			// Use Gujarati font
			doc.font('Gujarati');

			// -----------------------
			// HEADER - File Number (Right aligned)
			// -----------------------
			doc.fontSize(11).text('ક્રમાંક: ડીઆઈએસએચ/એ-કાયદા/કો.પ.ઈ./૨૦૨૫/', { align: 'right' });
			doc.fontSize(11).text('નિયામક, ઔદ્યોગીક સલામતી અને સ્વાસ્થ્યની કચેરી,', { align: 'right' });
			doc.text('૩/૫મો માળ, શ્રમ ભવન, રુસ્તમજી માર્ગ, ખાનપુર,', { align: 'right' });
			doc.text('અમદાવાદ - ૩૮૦૦૦૧', { align: 'right' });
			doc.moveDown(0.5);
			doc.text(`તા. ${interviewDate}`, { align: 'right' });
			doc.moveDown(1.5);

			// -----------------------
			// RECIPIENT ADDRESS
			// -----------------------
			doc.text('પ્રતિશ્રી,', { align: 'left' });
			doc.text(name, { align: 'left' });

			// Address lines (if provided)
			if (address) {
				const addressLines = Array.isArray(address) ? address : [address];
				addressLines.forEach((line) => {
					doc.text(line, { align: 'left' });
				});
			} else {
				doc.text('...............................', { align: 'left' });
				doc.text('...............................', { align: 'left' });
				doc.text('...............................', { align: 'left' });
			}
			doc.moveDown(1.5);

			// -----------------------
			// SUBJECT (Centered and underlined)
			// -----------------------
			doc
				.fontSize(11)
				.text('વિષય : કોમ્પીટન્ટ પર્સન જાહેર કરવા બાબતે ઈન્ટરવ્યૂમાં હાજર રહેવા બાબત.', {
					align: 'center',
					underline: true,
				});
			doc.moveDown(1.5);

			// -----------------------
			// DATE AND TIME
			// -----------------------
			doc.fontSize(11).text(`તારીખ : ${interviewDate}, સમય : ${interviewTime} કલાક`, {
				align: 'left',
			});
			doc.moveDown(1);

			// -----------------------
			// BODY PARAGRAPHS
			// -----------------------
			const paragraph1 = `ઉપરોક્ત વિષય પરત્વે આપશ્રી તા. ${applicationDate || '...............'}, ના પત્ર થી આપશ્રી ને ગુજરાત કારખાના નિયમ (સુધારેલ) ૧૯૬૩ ના નિયમ - ૨(એ) અન્વયે કારખાના ધારા, ૧૯૪૮ની કલમ ${factoryAct || '.............'} હેઠળ કોમ્પીટન્ટ પર્સન તરીકે જાહેર કરવા બાબતની અરજી અનુસંધાને તા. ${interviewDate}, ના રોજ બપોરના : ${interviewTime}, કલાકે ઈન્ટરવ્યૂ / રૂબરૂ મુલાકાત ડાયરેક્ટર, ઈન્ડસ્ટ્રીયલ સેફટી એન્ડ હેલ્થ, ૩ જો માળ, શ્રમ ભવન, ખાનપુર, અમદાવાદ ખાતેની ચેમ્બરમાં રાખવામાં આવેલ છે.`;

			doc.text(paragraph1, {
				align: 'justify',
				lineGap: 2,
			});
			doc.moveDown(1);

			const paragraph2 =
				'આથી ઉક્ત તારીખે તથા સમયે અત્રેની કચેરીએ જરૂરી શૈક્ષણિક લાયકાતના અસલ દસ્તાવેજો (ડિગ્રી સર્ટીફીકેટ), જન્મ તારીખનો પુરાવો તેમજ અનુભવના અસલ પ્રમાણપત્રો સાથે ઈન્ટરવ્યૂ / રૂબરૂ મુલાકાતમાં હાજર રહેવા આથી જણાવવામાં આવે છે.';

			doc.text(paragraph2, {
				align: 'justify',
				lineGap: 2,
			});
			doc.moveDown(1);

			const paragraph3 =
				'જો ઉક્ત તારીખે તથા સમયે આપ ઈન્ટરવ્યૂ દરમિયાન ના હાજર નહીં રહો તો આપની સદર અરજી દફતરે થયેલ ગણાશે. તેની સ્પષ્ટ નોંધ લેવા વિનંતી.';

			doc.text(paragraph3, {
				align: 'justify',
				lineGap: 2,
			});
			doc.moveDown(3);

			// -----------------------
			// SIGNATURE (Right aligned)
			// -----------------------
			doc.text('નિયામક', { align: 'right' });
			doc.text('ઔદ્યોગીક સલામતી અને સ્વાસ્થ્ય', { align: 'right' });
			doc.text('ગુજરાત રાજ્ય, અમદાવાદ', { align: 'right' });

			doc.end();
		} catch (err) {
			reject(err);
		}
	});
}

// Example usage:
// generateInterviewPDF({
//   name: 'શ્રી રાજેશ પટેલ',
//   address: ['123, સરદાર પટેલ નગર,', 'અમદાવાદ - ૩૮૦૦૫૪'],
//   interviewDate: '15/03/2025',
//   interviewTime: '02:30',
//   applicationDate: '01/03/2025',
//   factoryAct: '40'
// })
// .then(buffer => {
//   fs.writeFileSync('interview_letter.pdf', buffer);
//   console.log('PDF generated successfully!');
// })
// .catch(err => console.error('Error:', err));
