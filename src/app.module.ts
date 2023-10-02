import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OverdoseModule } from './overdose/overdose.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [OverdoseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
