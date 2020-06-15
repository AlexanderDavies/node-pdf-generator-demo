import { TestingModule, Test } from '@nestjs/testing';
import { PdfService } from './pdf.service';

jest.mock('../../lib/format-date', () => ({
  __esModule: true,
  default: () => '20201201',
}));

jest.mock('puppeteer', () => ({
  launch: () => ({
    newPage: () => ({
      goto: jest.fn(),
      pdf: jest.fn(),
    }),
    close: jest.fn(),
  }),
}));

describe('PdfService', () => {
  let pdfService: PdfService;

  beforeEach(async () => {
    const pdf: TestingModule = await Test.createTestingModule({
      providers: [PdfService],
    }).compile();

    pdfService = pdf.get<PdfService>(PdfService);
  });

  describe('when calling the service', () => {
    it('should return the pdf url', async () => {
      const result = await pdfService.generatePdf();

      console.log(result);

      expect(result.url).toEqual(
        'http://localhost:3000/reports/report_20201201.pdf',
      );
    });
  });
});
