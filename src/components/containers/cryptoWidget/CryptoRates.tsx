import React, { useState, useEffect } from "react";
import { ExclamationCircleIcon } from "@fluentui/react-northstar";
import * as strings from "CustomWidgetsApplicationCustomizerStrings";
import { ThemeProviderWrapper } from "../../UI/ThemeProviderWrapper";
import { CryptoProps, CURRENCIES } from "./CryptoConfig";
import { CryptoService } from "../../../services/CryptoService";
import { Cryptocurrency } from "../../../model/Cryptocurrency";
import { Cryptocurrencies } from "../../UI/Cryptocurrencies/Cryptocurrencies";
import styles from "../WordpressWidget/Wordpress.module.scss";

export const CryptoRates = (props: CryptoProps) => {
	const [rates, setRates] = useState<Map<string, Cryptocurrency>>(new Map<string, Cryptocurrency>());
	const [error, setError] = useState<string>("");

	useEffect(async () => {
		try {
			const service = new CryptoService();
			CURRENCIES.forEach(async (currency: string) => {
				if (props[currency]) {
					const price = await service.getRates(currency);
					setRates(prevRates => new Map<string, Cryptocurrency>(prevRates.set(currency, price)));
				}
			});
		} catch (error) {
			setError(error.message);
		}
	}, []);

	const renderContent = () => {
		if (error) {
			return (
				<div className={styles.error}>
					<ExclamationCircleIcon outline />
					{strings.CouldNotFetchData}
				</div>
			);
		}
		return <Cryptocurrencies rates={rates} />;
	};

	return <ThemeProviderWrapper className={styles.widgetContainer}>{renderContent()}</ThemeProviderWrapper>;
};
