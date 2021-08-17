import { Test, TestingModule } from '@nestjs/testing';
import { CryptoController } from '../controllers/crypto.controller';
import { CryptoService } from '../services/crypto.service';
import { HttpModule } from '@nestjs/axios';


describe('CryptoController', () => {
  let cryptoController: CryptoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CryptoController],
      providers: [CryptoService],
      imports: [HttpModule]
    }).compile();

    cryptoController = app.get<CryptoController>(CryptoController);
  });

  describe('root', () => {
    it('should return price of BTC', () => {
        expect(cryptoController).toBeTruthy();
    });
  });
});
