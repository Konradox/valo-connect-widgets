import { Cryptocurrency } from "../model/Cryptocurrency";

export class CryptoService {
    private queryStrings: Map<string, string> = new Map<string, string>([
        ["Bitcoin", "BTCUSDT"],
        ["Ethereum", "ETHUSDT"],
        ["Polkadot", "DOTUSDT"],
        ["Solana", "SOLUSDT"],
        ["FTXToken", "FTTUSDT"],
        ["Terra", "LUNAUSDT"],
        ["Avalanche", "AVAXUSDT"]
    ]);

    public async getRates(currency: string): Promise<Cryptocurrency> {
        const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${this.queryStrings.get(currency)}`);
        if (response.ok) {
            return await response.json();
        }
    }
}