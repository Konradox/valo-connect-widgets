import React from "react";
import { IIconProps } from "@microsoft/office-ui-fabric-react-bundle";
import { ConnectWidgetSize } from "@valo/extensibility";
import { ConnectWidget } from "@valo/extensibility/lib/models/connectWidget/ConnectWidget";
import { CryptoConfig, CryptoProps } from "../components/containers/cryptoWidget/CryptoConfig";
import { CryptoRates } from "../components/containers/cryptoWidget/CryptoRates";

export class CryptoWidget implements ConnectWidget<CryptoProps> {
	public title: string = "Cryptocurrency";
	public id: string = "kr-crypto-widget";
	public size: ConnectWidgetSize = ConnectWidgetSize.Single;
	public description?: string = "Shows the cryptocurrency rates";
	public iconProps?: IIconProps = { iconName: "kr-crypto" };
	public category?: string = "Elnathsoft";
	
	public widgetComponentsFactory = (config: CryptoProps) => {
		return [
			{
				id: "kr-crypto-widget-1",
				title: "Rates",
				content: <CryptoRates {...config} />,
			},
		];
	}

	public widgetConfigComponentFactory = (currentConfig: CryptoProps, onConfigUpdated: (config: CryptoProps) => void) => {
		return <CryptoConfig onConfigurationUpdated={onConfigUpdated} widgetConfiguration={currentConfig} />;
	}
}
