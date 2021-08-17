export class CryptoAssetResponse {
    assetId?: string;
    value?: string;

    constructor(assetId: string, value: string) {
        this.assetId = assetId;
        this.value = value;
    }
}

export class CryptoErrorResponse {
    error?: string;

    constructor(error: string) {
        this.error = error;
    }
}
  