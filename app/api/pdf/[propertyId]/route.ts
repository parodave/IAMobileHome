// app/api/pdf/[propertyId]/route.ts
import { NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';
import { properties } from '../../../../lib/properties';

export const runtime = 'nodejs';

const HOUSE_RULES_SUMMARY =
  "Règles de la maison : respect du voisinage, pas de fêtes, et check-in flexible selon disponibilité.";

export async function GET(
  _request: Request,
  { params }: { params: { propertyId: string } }
) {
  const { propertyId } = params;
  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }

  const doc = new PDFDocument({ size: 'A4', margin: 48 });
  const stream = new PassThrough();
  doc.pipe(stream);

  doc.fontSize(24).fillColor('#111').text(property.title, { underline: false });
  doc.moveDown(0.5);
  doc.fontSize(14).fillColor('#333').text(property.city);

  doc.moveDown(1);
  doc.fontSize(12).fillColor('#111').text(property.description, {
    lineGap: 4,
    width: 500,
  });

  doc.moveDown(1);
  doc.fontSize(14).fillColor('#111').text('Informations clés', { continued: false });
  const keyInfo = [
    `Surface : ${property.surface} m²`,
    `Chambres : ${property.bedrooms}`,
    `Capacité : ${property.maxGuests} personnes`,
    `Salles de bain : ${property.bathrooms}`,
    `Équipements : ${property.amenities.slice(0, 4).join(', ')}...`,
  ];
  doc.moveDown(0.5);
  doc.list(keyInfo, { bulletRadius: 2, textIndent: 12, bulletIndent: 6 });

  const imageUrls = property.images.slice(0, 3);
  if (imageUrls.length) {
    doc.moveDown(1);
    doc.fontSize(14).fillColor('#111').text('Photos');
    doc.moveDown(0.5);
    imageUrls.forEach((url) => {
      doc.image(url, {
        fit: [500, 280],
        align: 'center',
        valign: 'center',
      });
      doc.moveDown(0.5);
    });
  }

  doc.moveDown(0.5);
  doc.fontSize(14).fillColor('#111').text('Règles du lieu');
  doc.moveDown(0.25);
  doc.fontSize(12).fillColor('#333').text(HOUSE_RULES_SUMMARY, {
    width: 500,
    lineGap: 4,
  });

  doc.moveDown(1);
  doc.fontSize(12).fillColor('#111').text('Airbnb :');
  doc.moveDown(0.2);
  doc
    .fontSize(12)
    .fillColor('#0a6cff')
    .text(property.airbnbUrl, { link: property.airbnbUrl, underline: true });

  doc.moveDown(2);
  doc
    .fontSize(10)
    .fillColor('#444')
    .text('KHH Global Projects – www.khh-global-projects.com', {
      align: 'center',
    });

  doc.end();

  return new NextResponse(stream as unknown as BodyInit, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${propertyId}.pdf"`,
    },
  });
}
