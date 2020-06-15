import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { join } from 'path';

import formatDate from '../../lib/format-date';

@Injectable()
export class PdfService {
  async generatePdf(): Promise<any> {
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.goto('http://localhost:3000/chart', {
      waitUntil: 'networkidle0',
    });

    const fileName = 'report_' + formatDate() + '.pdf';

    const reportPath = join(__dirname, '../../../public/reports/', fileName);

    await page.pdf({ path: reportPath, format: 'A4' });

    await browser.close();

    return {
      url: 'http://localhost:3000/reports/' + fileName,
    };
  }
}
