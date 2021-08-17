import { Test } from '@nestjs/testing';
import { CryptoService } from 'services/crypto.service';
import { HttpModule } from '@nestjs/axios';

describe('CryptoService', () => {
  let cryptoService: CryptoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CryptoService],
      imports: [HttpModule]
    }).compile();

    cryptoService = module.get(CryptoService);
  });

  it('should be defined', () => {
    expect(cryptoService).toBeTruthy();
  });
});