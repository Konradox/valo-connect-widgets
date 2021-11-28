import React, { useState } from "react";
import { Input, InputProps } from "@fluentui/react-northstar/dist/es/components/Input/Input";
import { ConnectWidgetConfigurationProps, ConnectWidgetSize } from "@valo/extensibility";
import { RendererContext } from "@fluentui/react-bindings/dist/es/renderer/RendererContext";
import { createEmotionRenderer } from "@fluentui/react-northstar-emotion-renderer";
import { Provider as FluentUIThemeProvider } from "@fluentui/react-northstar/dist/es/components/Provider/Provider";
import { ThemeManager } from "../../../managers/ThemeManager";
import { ConfigSection } from "../configSection/ConfigSection";

export interface WordpressProps {
	server: string;
	postsCount: number;
	size: ConnectWidgetSize;
}

export const WordpressConfig = (props: ConnectWidgetConfigurationProps<WordpressProps>) => {
	const [server, setServer] = useState<string>(props.widgetConfiguration ? props.widgetConfiguration.server : "");
	const [postCount, setPostsCount] = useState<number>(props.widgetConfiguration ? props.widgetConfiguration.postsCount : "");

	const serverChange = (_element, data: InputProps) => {
		setServer(data.value);
		props.onConfigurationUpdated({ ...props.widgetConfiguration, server: data.value as string });
	};

	const postsCountChange = (_element, data: InputProps) => {
		setPostsCount(data.value);
		props.onConfigurationUpdated({ ...props.widgetConfiguration, postsCount: data.value as number });
	};

	return (
		<RendererContext.Provider value={createEmotionRenderer()}>
			<FluentUIThemeProvider theme={ThemeManager.getTheme()}>
				<ConfigSection title="Server URL">
					<Input onChange={serverChange} value={server} />
				</ConfigSection>
				<ConfigSection title="Posts Count">
					<Input onChange={postsCountChange} type="number" value={postCount} />
				</ConfigSection>
			</FluentUIThemeProvider>
		</RendererContext.Provider>
	);
};
