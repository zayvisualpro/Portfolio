import fs from 'fs';
import zlib from 'zlib';
import QRCode from 'qrcode';
import { PDFDocument, StandardFonts, rgb, PDFName, PDFString } from 'pdf-lib';

async function main() {
  const inputPdfPath = 'C:/Users/anton/OneDrive/Documents/CV_Antony_Raimbault_V3.pdf';
  const backupPdfPath = 'C:/Users/anton/OneDrive/Documents/CV_Antony_Raimbault_V3_backup.pdf';
  const sourcePdfPath = fs.existsSync(backupPdfPath) ? backupPdfPath : inputPdfPath;

  if (!fs.existsSync(sourcePdfPath)) {
    console.error('File not found:', sourcePdfPath);
    process.exit(1);
  }

  // Create backup of original if not already done
  if (!fs.existsSync(backupPdfPath) && fs.existsSync(inputPdfPath)) {
    fs.copyFileSync(inputPdfPath, backupPdfPath);
    console.log('Backup created at:', backupPdfPath);
  }

  console.log('Reading base CV from:', sourcePdfPath);
  const pdfBytes = fs.readFileSync(sourcePdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const page = pdfDoc.getPage(0);
  const contents = page.node.Contents();
  const rawContents = contents.contents;
  let streamStr = zlib.inflateSync(Buffer.from(rawContents)).toString('latin1');

  // Website signature cinematic red: #E03A3A (224, 58, 58)
  const siteRedRg = '0.878431 0.227451 0.227451 rg';

  // 1. Replace gold/bronze #B38B5D (0.701961 0.545098 0.364706 rg) with site red
  streamStr = streamStr.replaceAll('0.701961 0.545098 0.364706 rg', siteRedRg);

  // 2. Replace separator line color #D3C2AF (0.827451 0.760784 0.686275 rg) with site red
  streamStr = streamStr.replaceAll('0.827451 0.760784 0.686275 rg', siteRedRg);

  // Re-compress and update the contents stream via pdf-lib
  const newStream = pdfDoc.context.flateStream(Buffer.from(streamStr, 'latin1'));
  const newStreamRef = pdfDoc.context.register(newStream);
  page.node.set(PDFName.of('Contents'), newStreamRef);

  // Fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const portfolioUrl = 'https://zayvisualpro.github.io/Portfolio/';

  // Generate QR code pointing to portfolio with crisp contrast
  const qrPngBuffer = await QRCode.toBuffer(portfolioUrl, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 400,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  });

  const qrImage = await pdfDoc.embedPng(qrPngBuffer);

  const { width: pageWidth, height: pageHeight } = page.getSize();
  console.log(`Page size: ${pageWidth} x ${pageHeight}`);

  // Card geometry matching original design
  const cardRight = 552.76;
  const cardWidth = 76;
  const cardLeft = cardRight - cardWidth; // 476.76
  const cardTop = 776;
  const cardHeight = 98;
  const cardBottom = cardTop - cardHeight; // 678

  // Colors matching the website's brand
  const redColor = rgb(224 / 255, 58 / 255, 58 / 255); // #E03A3A
  const subtextColor = rgb(80 / 255, 80 / 255, 80 / 255);
  const white = rgb(1, 1, 1);

  // Draw Card Background (white) with site red border
  page.drawRectangle({
    x: cardLeft,
    y: cardBottom,
    width: cardWidth,
    height: cardHeight,
    color: white,
    borderColor: redColor,
    borderWidth: 0.8,
  });

  // Top accent bar in site red
  page.drawRectangle({
    x: cardLeft,
    y: cardTop - 3,
    width: cardWidth,
    height: 3,
    color: redColor,
  });

  // Header text: "PORTFOLIO" in site red
  const titleText = 'PORTFOLIO';
  const titleFontSize = 8.5;
  const titleWidth = helveticaBold.widthOfTextAtSize(titleText, titleFontSize);
  const titleX = cardLeft + (cardWidth - titleWidth) / 2;
  const titleY = cardTop - 15;

  page.drawText(titleText, {
    x: titleX,
    y: titleY,
    size: titleFontSize,
    font: helveticaBold,
    color: redColor,
  });

  // QR Code
  const qrSize = 58;
  const qrX = cardLeft + (cardWidth - qrSize) / 2;
  const qrY = titleY - 8 - qrSize;

  page.drawImage(qrImage, {
    x: qrX,
    y: qrY,
    width: qrSize,
    height: qrSize,
  });

  // Footer text
  const subText = 'Scannez ou cliquez';
  const subFontSize = 6;
  const subWidth = helvetica.widthOfTextAtSize(subText, subFontSize);
  const subX = cardLeft + (cardWidth - subWidth) / 2;
  const subY = qrY - 10;

  page.drawText(subText, {
    x: subX,
    y: subY,
    size: subFontSize,
    font: helvetica,
    color: subtextColor,
  });

  // Add Clickable Link Annotation on the QR Code card
  const linkAnnotation = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Link',
    Rect: [cardLeft, cardBottom, cardRight, cardTop],
    Border: [0, 0, 0],
    C: [0, 0, 0],
    A: {
      Type: 'Action',
      S: 'URI',
      URI: PDFString.of(portfolioUrl),
    },
  });
  const linkRef = pdfDoc.context.register(linkAnnotation);

  // Also add mailto link on email antony.raimbault@outlook.com
  const emailAnnotation = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Link',
    Rect: [43, 655, 195, 669],
    Border: [0, 0, 0],
    C: [0, 0, 0],
    A: {
      Type: 'Action',
      S: 'URI',
      URI: PDFString.of('mailto:antony.raimbault@outlook.com'),
    },
  });
  const emailRef = pdfDoc.context.register(emailAnnotation);

  // Attach annotations
  const existingAnnots = page.node.Annots();
  const annotsArray = existingAnnots ? existingAnnots.asArray() : [];
  annotsArray.push(linkRef, emailRef);
  page.node.set(PDFName.of('Annots'), pdfDoc.context.obj(annotsArray));

  const modifiedPdfBytes = await pdfDoc.save();

  // Save to OneDrive original path
  fs.writeFileSync(inputPdfPath, modifiedPdfBytes);
  console.log('Successfully updated:', inputPdfPath);

  // Save to Downloads
  const downloadsPath = 'C:/Users/anton/Downloads/CV - Antony Raimbault.pdf';
  try {
    fs.writeFileSync(downloadsPath, modifiedPdfBytes);
    console.log('Successfully saved copy to:', downloadsPath);
  } catch (err) {
    console.warn('Could not save to downloads:', err.message);
  }

  // Save to current workspace public directory
  const currentPublicPath = 'd:/Code/1/Portfolio - Pro BTS/public/CV_Antony_Raimbault.pdf';
  fs.writeFileSync(currentPublicPath, modifiedPdfBytes);
  console.log('Successfully saved copy to:', currentPublicPath);

  // Save to secondary workspace if exists
  const oldPortfolioPublicPath = 'd:/Code/1/Portfolio/public/CV_Antony_Raimbault.pdf';
  if (fs.existsSync('d:/Code/1/Portfolio/public')) {
    try {
      fs.writeFileSync(oldPortfolioPublicPath, modifiedPdfBytes);
      console.log('Successfully saved copy to:', oldPortfolioPublicPath);
    } catch (err) {
      // ignore
    }
  }

  console.log('All CV copies updated with site colors (#E03A3A) and QR code pointing to:', portfolioUrl);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
