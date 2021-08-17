import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { CryptoController } from '../controllers/crypto.controller';
import { AppService } from '../services/app.service';
import { CryptoService } from '../services/crypto.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController,CryptoController],
  providers: [AppService,CryptoService],
})
export class AppModule {}
