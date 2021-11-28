import * as React from "react";
import { Text } from "@fluentui/react-northstar/dist/es/components/Text/Text";
import styles from "./ConfigSection.module.scss";

export interface IConfigSection {
	title?: string;
}

export function ConfigSection(props: React.PropsWithChildren<IConfigSection>) {
	return (
		<div className={styles.configSection}>
			<div className={styles.titleRow}>
				{props.title && <Text className={styles.configPanelTitle}>{props.title}</Text>}
			</div>
			{props.children}
		</div>
	);
}
