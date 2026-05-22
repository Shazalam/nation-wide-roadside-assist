import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const puppeteer = await import('puppeteer');

    // Determine the base URL - use the request origin or fallback
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;
    const targetUrl = `${baseUrl}/company/capability-report`;

    // Launch headless Chromium
    const browser = await puppeteer.default.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--font-render-hinting=none',
        '--force-color-profile=srgb',
      ],
    });

    const page = await browser.newPage();

    // Set desktop fullscreen viewport
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2, // Retina-level sharpness
    });

    // Navigate to the capability report page
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // Wait for all images to load
    await page.evaluate(async () => {
      const images = Array.from(document.querySelectorAll('img'));
      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
    });

    // Additional wait for fonts & animations to settle
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Count slide sections to determine page count
    const slideCount = await page.evaluate(() => {
      return document.querySelectorAll('section[id^="slide-"]').length;
    });

    // Inject print-optimized CSS for pixel-perfect 16:9 PDF slides
    await page.addStyleTag({
      content: `
        @page {
          size: 1920px 1080px;
          margin: 0;
        }

        /* Hide navbar, fixed elements, scroll indicators */
        header,
        nav,
        [data-hide-pdf],
        .fixed {
          display: none !important;
        }

        /* Reset scroll snap & overflow */
        html, body {
          scroll-snap-type: none !important;
          overflow: visible !important;
          height: auto !important;
          min-height: auto !important;
          background: #020617 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* The main scrolling container */
        main,
        [class*="snap-y"],
        [class*="snap-mandatory"] {
          scroll-snap-type: none !important;
          overflow: visible !important;
          height: auto !important;
          min-height: auto !important;
        }

        /* Each slide = one exact 16:9 page */
        section[id^="slide-"] {
          width: 1920px !important;
          height: 1080px !important;
          min-height: 1080px !important;
          max-height: 1080px !important;
          page-break-after: always !important;
          page-break-inside: avoid !important;
          break-after: page !important;
          break-inside: avoid !important;
          overflow: hidden !important;
          position: relative !important;
          display: flex !important;
          box-sizing: border-box !important;
        }

        /* Remove page break from last slide */
        section[id^="slide-"]:last-of-type {
          page-break-after: avoid !important;
          break-after: avoid !important;
        }

        /* Freeze all animations at their final state */
        *, *::before, *::after {
          animation-play-state: paused !important;
          animation-delay: 0s !important;
          animation-duration: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }

        /* Ensure all backgrounds, colors, shadows render */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        /* Preserve backdrop-filter effects visually */
        [class*="backdrop-blur"],
        [class*="backdrop-filter"] {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        /* Ensure gradient backgrounds render */
        [class*="bg-gradient"],
        [class*="from-"],
        [class*="via-"],
        [class*="to-"] {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* Force visibility on all elements */
        [class*="animate-"] {
          opacity: 1 !important;
          transform: none !important;
        }

        /* Remove any padding-top from sections that account for navbar */
        section[id^="slide-"] {
          padding-top: 24px !important;
        }
      `,
    });

    // Small wait for CSS injection to apply
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      width: '1920px',
      height: '1080px',
      printBackground: true,
      preferCSSPageSize: true,
      landscape: false, // We're using exact 1920x1080 dimensions which is landscape
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    await browser.close();

    // Return PDF as downloadable response
    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="NationwideRoadsideAssist-Capability-Report.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Increase the max duration for this route (Vercel/serverless)
export const maxDuration = 60;
export const dynamic = 'force-dynamic';
