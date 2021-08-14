import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import {_} from 'lodash';


@Injectable()
export class CryptoService {
    constructor(private httpService: HttpService) {}

    getCryptoPrice(cryptoAsset: string): any {
        let coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/';
        if(cryptoAsset == 'BTC')
            coinGeckoUrl = coinGeckoUrl + 'bitcoin';
        if(cryptoAsset == 'ETH')
            coinGeckoUrl = coinGeckoUrl + 'ethereum';

        return this.httpService.get(coinGeckoUrl).pipe(
            map(response => {
                let assetValue = response.data.market_data.current_price.usd.toFixed(1);
                console.log("pricee:: %s for asset::: %s",assetValue, cryptoAsset);
                return {"assetId": cryptoAsset, "value": assetValue };
            })
        );

    }
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
