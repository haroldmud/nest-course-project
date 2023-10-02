import { Module } from '@nestjs/common';
import { OverdoseController } from './overdose.controller';
import { OverdoseService } from './overdose.service';

@Module({
  controllers: [OverdoseController],
  providers: [OverdoseService],
})
export class OverdoseModule {}
