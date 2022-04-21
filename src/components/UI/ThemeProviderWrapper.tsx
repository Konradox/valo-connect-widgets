import * as React from "react";
import { Provider as FluentUIThemeProvider } from "@fluentui/react-northstar/dist/es/components/Provider/Provider";
import { RendererContext } from "@fluentui/react-bindings/dist/es/renderer/RendererContext";
import { createEmotionRenderer } from "@fluentui/react-northstar-emotion-renderer";
import { ThemeManager } from "../../managers/ThemeManager";

export interface ThemeProviderWrapperProps {
    className?: string;
}

export const ThemeProviderWrapper = (props: React.PropsWithChildren<ThemeProviderWrapperProps>) => {
    return (
        <div className={props.className}>
			<RendererContext.Provider value={createEmotionRenderer()}>
				<FluentUIThemeProvider theme={ThemeManager.getTheme()}>{props.children}</FluentUIThemeProvider>
			</RendererContext.Provider>
		</div>
    );
};
