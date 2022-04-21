import React from "react";
import { Cryptocurrency } from "../../../model/Cryptocurrency";
import { CURRENCIES } from "../../containers/cryptoWidget/CryptoConfig";
import { Crypto } from "./Crypto/Crypto";

export interface CryptocurrenciesProps {
	rates: Map<string, Cryptocurrency>;
}

export const Cryptocurrencies = (props: CryptocurrenciesProps) => {
	const items = [];
	CURRENCIES.forEach(currency => {
		const info = props.rates.get(currency);
		if (info) {
			items.push(
				<Crypto
					name={currency}
					change={info.priceChangePercent}
					rate={info.lastPrice}
					symbol={info.symbol.substring(0, info.symbol.length - 4)}
				/>
			);
		}
	});
	return <>{items}</>;
};
