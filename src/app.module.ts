import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
