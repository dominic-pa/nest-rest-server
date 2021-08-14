import { Controller, Get, Query, Res } from '@nestjs/common';
import { CryptoService } from '../services/crypto.service';

@Controller()
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('/price')
  getAssetPrice(@Query('asset') asset:string): string {
    if (asset == null)
        return 'This asset is not supported'
    else if(asset == 'BTC' || asset == 'ETH')
        return this.cryptoService.getCryptoPrice(asset);
    else
        return 'asset should be either BTC or ETH, not empty'
}
}
