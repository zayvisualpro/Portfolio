import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import { PDFDocument, StandardFonts, rgb, PDFName, PDFString } from 'pdf-lib';

async function main() {
  const inputPdfPath = 'C:/Users/anton/OneDrive/Documents/CV_Antony_Raimbault_V3.pdf';
  const backupPdfPath = 'C:/Users/anton/OneDrive/Documents/CV_Antony_Raimbault_V3_backup.pdf';
  
  if (!fs.existsSync(inputPdfPath)) {
    console.error('File not found:', inputPdfPath);
    process.exit(1);
  }

  // Create backup if not already done
  if (!fs.existsSync(backupPdfPath)) {
    fs.copyFileSync(inputPdfPath, backupPdfPath);
    console.log('Backup created at:', backupPdfPath);
  }

  const pdfBytes = fs.readFileSync(inputPdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const portfolioUrl = 'https://zayvisualpro.github.io/Portfolio/';

  // Generate QR code as PNG buffer
  const qrPngBuffer = await QRCode.toBuffer(portfolioUrl, {
    errorCorrectionLevel: 'H',
    margin: 1,
    width: 300,
    color: {
      dark: '#222222',
      light: '#ffffff',
    },
  });

  const qrImage = await pdfDoc.embedPng(qrPngBuffer);

  const page = pdfDoc.getPage(0);
  const { width: pageWidth, height: pageHeight } = page.getSize();
  console.log(`Page size: ${pageWidth} x ${pageHeight}`);

  // Card geometry
  // Right aligned with right margin (552.76)
  const cardRight = 552.76;
  const cardWidth = 76;
  const cardLeft = cardRight - cardWidth; // 476.76
  const cardTop = 776;
  const cardHeight = 98;
  const cardBottom = cardTop - cardHeight; // 678

  // Colors matching CV
  const goldColor = rgb(179 / 255, 139 / 255, 93 / 255); // #b38b5d
  const borderColor = rgb(211 / 255, 194 / 255, 175 / 255); // #d3c2af
  const subtextColor = rgb(102 / 255, 102 / 255, 102 / 255); // #666666
  const white = rgb(1, 1, 1);

  // Draw Card Background (white)
  page.drawRectangle({
    x: cardLeft,
    y: cardBottom,
    width: cardWidth,
    height: cardHeight,
    color: white,
    borderColor: borderColor,
    borderWidth: 0.8,
  });

  // Top accent bar inside card
  page.drawRectangle({
    x: cardLeft,
    y: cardTop - 3,
    width: cardWidth,
    height: 3,
    color: goldColor,
  });

  // Header text: "PORTFOLIO"
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
    color: goldColor,
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

  // Footer text: "Scannez ou cliquez"
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

  // Save to original path
  fs.writeFileSync(inputPdfPath, modifiedPdfBytes);
  console.log('Successfully updated:', inputPdfPath);

  // Save to Downloads as well
  const downloadsPath = 'C:/Users/anton/Downloads/CV - Antony Raimbault.pdf';
  fs.writeFileSync(downloadsPath, modifiedPdfBytes);
  console.log('Successfully saved copy to:', downloadsPath);

  // Save to public in Portfolio workspace
  const portfolioPublicPath = 'd:/Code/1/Portfolio/public/CV_Antony_Raimbault.pdf';
  fs.writeFileSync(portfolioPublicPath, modifiedPdfBytes);
  console.log('Successfully saved copy to:', portfolioPublicPath);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
