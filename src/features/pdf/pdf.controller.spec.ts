import { TestingModule, Test } from '@nestjs/testing';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';

describe('PdfController', () => {
  let pdfController: PdfController;
  let pdfService: PdfService;

  beforeEach(async () => {
    const pdf: TestingModule = await Test.createTestingModule({
      controllers: [PdfController],
      providers: [PdfService],
    }).compile();

    pdfController = pdf.get<PdfController>(PdfController);
    pdfService = pdf.get<PdfService>(PdfService);
  });

  describe('When calling the pdf controller', () => {
    const res: any = {
      status() {
        return this;
      },
      json: jest.fn(),
    };

    beforeEach(() => {
      jest
        .spyOn(pdfService, 'generatePdf')
        .mockImplementation(() => Promise.resolve({ url: 'test' }));
    });

    it('should return the  url', async () => {
      await pdfController.generatePdf(res);
      expect(res.json).toBeCalledWith({ url: 'test' });
    });
  });
});
