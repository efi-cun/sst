/* ========================================
   Certificate Generator
   ======================================== */
const CertificateGenerator = (() => {
    function generateVerificationCode(userId) {
        const prefix = 'SST';
        const date = new Date();
        const year = date.getFullYear();
        const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `${prefix}-${year}-${rand}`;
    }

    function generateCertificate(user, progress) {
        const certData = {
            name: user.nombre || user.name,
            cedula: user.cedula || user.userId,
            date: new Date().toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            code: generateVerificationCode(user.cedula || user.userId),
            duration: '80 minutos'
        };

        return certData;
    }

    async function downloadPDF(certData) {
        if (typeof PDFLib !== 'undefined') {
            try {
                // Fetch the template PDF file
                const response = await fetch('assets/pdf/Certificado_SST_Plantilla.pdf');
                if (!response.ok) {
                    throw new Error('No se pudo cargar la plantilla del certificado PDF.');
                }
                const templateBytes = await response.arrayBuffer();

                // Load the PDF with pdf-lib
                const pdfDoc = await PDFLib.PDFDocument.load(templateBytes);
                const page = pdfDoc.getPages()[0];

                // Define standard font
                const fontBold = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
                const fontRegular = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

                // Get page dimensions
                const { width, height } = page.getSize();

                // Colors
                const colorPrimary = PDFLib.rgb(27/255, 58/255, 92/255); // #1B3A5C
                const colorMuted = PDFLib.rgb(127/255, 140/255, 141/255); // #7F8C8D
                const colorDark = PDFLib.rgb(44/255, 62/255, 80/255); // #2C3E50

                // Helper to draw centered text
                const drawCenteredText = (text, y, fontSize, font, color) => {
                    const textWidth = font.widthOfTextAtSize(text, fontSize);
                    page.drawText(text, {
                        x: (width - textWidth) / 2,
                        y: y,
                        size: fontSize,
                        font: font,
                        color: color || colorPrimary
                    });
                };

                // Helper to draw column centered text
                const drawColumnCenteredText = (text, centerX, y, fontSize, font, color) => {
                    const textWidth = font.widthOfTextAtSize(text, fontSize);
                    page.drawText(text, {
                        x: centerX - (textWidth / 2),
                        y: y,
                        size: fontSize,
                        font: font,
                        color: color || colorPrimary
                    });
                };

                // Draw Name (Centered)
                drawCenteredText(certData.name, height * 0.505, 26, fontBold);

                // Draw Cedula (Centered)
                drawCenteredText(`Cédula: ${certData.cedula}`, height * 0.445, 14, fontRegular, colorMuted);

                // Draw Date Value (Centered in column)
                // Left column center is width * 0.3125
                drawColumnCenteredText(certData.date, width * 0.3125, height * 0.187, 13, fontRegular, colorDark);

                // Draw Verification Code Value (Centered in column)
                // Right column center is width * 0.6875
                drawColumnCenteredText(certData.code, width * 0.6875, height * 0.187, 14, fontBold, colorPrimary);

                // Save PDF and download
                const pdfBytes = await pdfDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `Certificado_SST_${certData.cedula}.pdf`;
                link.click();

                return certData;
            } catch (err) {
                console.error('Error al generar PDF con pdf-lib, intentando fallback de Canvas:', err);
            }
        }

        // FALLBACK: Canvas generation as PNG (in case pdf-lib fails or is offline)
        const canvas = document.createElement('canvas');
        const scale = 2;
        canvas.width = 800 * scale;
        canvas.height = 566 * scale;
        const ctx = canvas.getContext('2d');
        ctx.scale(scale, scale);

        // Background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 800, 566);

        // Border
        ctx.strokeStyle = '#1B3A5C';
        ctx.lineWidth = 4;
        ctx.strokeRect(10, 10, 780, 546);

        // Inner border
        ctx.strokeStyle = '#F18F01';
        ctx.lineWidth = 1;
        ctx.strokeRect(18, 18, 764, 530);

        // Shield icon
        ctx.fillStyle = '#1B3A5C';
        ctx.beginPath();
        ctx.moveTo(400, 50);
        ctx.lineTo(440, 70);
        ctx.lineTo(440, 100);
        ctx.quadraticCurveTo(440, 130, 400, 140);
        ctx.quadraticCurveTo(360, 130, 360, 100);
        ctx.lineTo(360, 70);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('SST', 400, 108);

        // Title
        ctx.fillStyle = '#1B3A5C';
        ctx.font = '12px Inter, sans-serif';
        ctx.letterSpacing = '3px';
        ctx.fillText('CERTIFICADO', 400, 170);

        ctx.font = 'bold 20px Poppins, sans-serif';
        ctx.fillText('Reinducción en Seguridad y Salud en el Trabajo', 400, 200);

        // Otorgado a
        ctx.fillStyle = '#7F8C8D';
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText('Otorgado a:', 400, 240);

        // Name
        ctx.fillStyle = '#1B3A5C';
        ctx.font = 'bold 28px Poppins, sans-serif';
        ctx.fillText(certData.name, 400, 280);

        // Cedula
        ctx.fillStyle = '#7F8C8D';
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText(`Cédula: ${certData.cedula}`, 400, 310);

        // Description
        ctx.font = '13px Inter, sans-serif';
        ctx.fillText('Por haber completado satisfactoriamente el curso de Reinducción SST 2.0', 400, 345);
        ctx.fillText(`con una duración de ${certData.duration}`, 400, 365);

        // Separator line
        ctx.strokeStyle = '#E8ECF1';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(150, 400);
        ctx.lineTo(650, 400);
        ctx.stroke();

        // Date
        ctx.fillStyle = '#7F8C8D';
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText('Fecha:', 250, 440);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '13px Inter, sans-serif';
        ctx.fillText(certData.date, 250, 460);

        // Verification code
        ctx.fillStyle = '#7F8C8D';
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText('Código de verificación:', 550, 440);
        ctx.fillStyle = '#1B3A5C';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.fillText(certData.code, 550, 460);

        // Footer
        ctx.fillStyle = '#BDC3C7';
        ctx.font = '10px Inter, sans-serif';
        ctx.fillText('Corporación Unificada Nacional de Educación Superior — CUN', 400, 520);

        // Download
        const link = document.createElement('a');
        link.download = `Certificado_SST_${certData.cedula}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        return certData;
    }

    return {
        generateCertificate,
        generateVerificationCode,
        downloadPDF
    };
})();
