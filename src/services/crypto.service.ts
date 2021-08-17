import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CryptoAssetResponse } from 'interfaces/Interfaces';


@Injectable()
export class CryptoService {
    constructor(private httpService: HttpService) {}

    getCryptoPrice(cryptoAsset: string): Observable<CryptoAssetResponse> {
        let coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/';
        let cryptoAssetResp;

        if(cryptoAsset == 'BTC')
            coinGeckoUrl = coinGeckoUrl + 'bitcoin';
        if(cryptoAsset == 'ETH')
            coinGeckoUrl = coinGeckoUrl + 'ethereum';

        return this.httpService.get(coinGeckoUrl).pipe(
            map(response => {
                if (response.status.valueOf() === 200){
                    let assetValue = response.data.market_data.current_price.usd.toFixed(1);
                    console.log("price:: %s for asset::: %s",assetValue, cryptoAsset);
                    cryptoAssetResp = new CryptoAssetResponse(cryptoAsset,assetValue);
                    console.log(cryptoAssetResp);
                    return cryptoAssetResp;
                }
            })
        );

    }
}
