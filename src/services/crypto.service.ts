import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  getCryptoPrice(): string {
    return 'Hello World!';
  }
}
