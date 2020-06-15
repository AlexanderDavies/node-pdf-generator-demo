import { Module } from '@nestjs/common';
import { HealthModule } from './features/health/health.module';
import { ChartModule } from './features/chart/chart.module';
import { PdfModule } from './features/pdf/pdf.module';

@Module({
  imports: [HealthModule, ChartModule, PdfModule],
})
export class AppModule {}
