import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {

  constructor(private pdfService: PdfService) {}

  @Get()
  async generatePdf(@Res() res: Response): Promise<any> {
    const resBody: {res: string} = await this.pdfService.generatePdf()
    res.status(200).json(resBody);
  }
}
