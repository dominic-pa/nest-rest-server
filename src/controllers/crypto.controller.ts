import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class CryptoController {
  constructor(private readonly appService: AppService) {}

  @Get('/getAssetPrice')
  getAssetPrice(@Query('asset') asset:string): string {
    if (asset == null)
        return 'This asset is not supported'
    else if(asset == 'BTC' || asset == 'ETH')
        return this.appService.getHello();
    else
        return 'asset should be either BTC or ETH, not empty'
}
}
