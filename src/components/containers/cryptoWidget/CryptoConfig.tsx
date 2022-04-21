import { Checkbox, CheckboxProps } from "@fluentui/react-northstar";
import { ConnectWidgetConfigurationProps } from "@valo/extensibility";
import * as React from "react";
import { ThemeProviderWrapper } from "../../UI/ThemeProviderWrapper";
import { ConfigSection } from "../configSection/ConfigSection";
import * as strings from "CustomWidgetsApplicationCustomizerStrings";

export interface CryptoProps {
	[key: string]: string;
}

interface CurrencyCheckboxProps extends CheckboxProps {
	currency: string;
}

export const CURRENCIES = ["Bitcoin", "Ethereum", "Polkadot", "Solana", "FTXToken", "Terra", "Avalanche"];

export const CryptoConfig = (props: ConnectWidgetConfigurationProps<CryptoProps>) => {
	const toggleClick = (_element, data: CurrencyCheckboxProps) => {
		const newConfig = { ...props.widgetConfiguration };
		newConfig[data.currency] = data.checked;
		props.onConfigurationUpdated(newConfig);
	};

	const renderToggles = () => {
		return CURRENCIES.map((currency, index) => {
			return (
				<ConfigSection title={strings[currency]} key={index}>
					<Checkbox label={strings.Show + strings[currency]} toggle checked={props.widgetConfiguration[currency]} currency={currency} onChange={toggleClick as any}/>
				</ConfigSection>
			);
		});
	};

	return <ThemeProviderWrapper>{renderToggles()}</ThemeProviderWrapper>;
};
