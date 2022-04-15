import { Text } from "@fluentui/react-northstar";
import * as React from "react";
import styles from "./Crypto.module.scss";

export interface CryptocurrencyProps {
	name: string;
	rate: string;
	change: string;
}

export const Crypto = (props: CryptocurrencyProps) => {
	return (
		<div className={styles.container}>
			<Text content={props.name} size="largest" />
			<div className={styles.values}>
				<Text content={`$${Number(props.rate).toFixed(2)}`} />
				<Text content={`${Number(props.change).toFixed(2)}%`} />
			</div>
		</div>
	);
};
