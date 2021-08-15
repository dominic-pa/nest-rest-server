import { Controller, Get, Query, Res } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CryptoErrorResponse } from 'src/interfaces/Interfaces';
import { CryptoService } from '../services/crypto.service';
import { of } from 'rxjs';

@Controller()
export class CryptoController {
    constructor(private readonly cryptoService: CryptoService) {}

    @Get('/price')
    getAssetPrice(@Query('asset') asset:string): Observable<any> {
    if (asset == null){
        return of(createErrorResponse('This asset is not supported'));
    }
    else if(asset != 'BTC' && asset != 'ETH'){
        return of(createErrorResponse('Asset should be either BTC or ETH, not empty'));
    }
    else
        return this.cryptoService.getCryptoPrice(asset);
    }
}

function createErrorResponse(message: string):CryptoErrorResponse {
    let errorResponse: CryptoErrorResponse;
    errorResponse = new CryptoErrorResponse(message);
    return errorResponse;
}
