import * as React from "react";
import { Text } from "@fluentui/react-northstar/dist/es/components/Text/Text";
import styles from "./ConfigSection.module.scss";

export interface ConfigSection {
	title?: string;
}

export function ConfigSection(props: React.PropsWithChildren<ConfigSection>) {
	return (
		<div className={styles.configSection}>
			<div className={styles.titleRow}>
				{props.title && <Text className={styles.configPanelTitle}>{props.title}</Text>}
			</div>
			{props.children}
		</div>
	);
}
