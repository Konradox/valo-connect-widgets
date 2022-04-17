import { Text } from "@fluentui/react-northstar";
import * as React from "react";
import styles from "./Crypto.module.scss";
import { Image } from "@fluentui/react-northstar";

export interface CryptocurrencyProps {
	name: string;
	rate: string;
	change: string;
	symbol: string;
}

export const Crypto = (props: CryptocurrencyProps) => {
	const getImage = (): string => {
		return require(`../../../../assets/${props.name}.svg`);
	};

	const getChangeStyles = () => {
		const change = Number(props.change);
		let changeStyles: string = "";
		if (change > 0) {
			changeStyles = styles.changePositive;
		}
		if (change < 0) {
			changeStyles = styles.changeNegative;
		}
		return changeStyles;
	};

	const getChange = () => {
		const change = Number(props.change);
		if (change > 0) {
			return `+${change.toFixed(2)}%`;
		}
		return `${change.toFixed(2)}%`;
	};

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src={getImage()}
					styles={{
						maxWidth: "40px",
						maxHeight: "40px",
					}}
				/>
			</div>
			<div className={styles.nameContainer}>
				<Text content={props.symbol} size="large" />
				<Text content={props.name} size="medium" className={styles.name} />
			</div>
			<div className={styles.values}>
				<Text content={`$${Number(Number(props.rate).toFixed(2)).toLocaleString()}`} size="large" />
				<Text content={getChange()} className={getChangeStyles()}/>
			</div>
		</div>
	);

	
};
