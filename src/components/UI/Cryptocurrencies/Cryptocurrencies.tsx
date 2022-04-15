import React from "react";
import { Cryptocurrency } from "../../../model/Cryptocurrency";
import { Crypto } from "./Crypto/Crypto";

export interface CryptocurrenciesProps {
	rates: Map<string, Cryptocurrency>;
}

export const Cryptocurrencies = (props: CryptocurrenciesProps) => {
	const items = [];
	props.rates.forEach((value: Cryptocurrency, key: string) => {
		items.push(
            <Crypto name={key} change={value.priceChangePercent} rate={value.lastPrice}/>			
		);
	});
	return <>{items}</>;
};
