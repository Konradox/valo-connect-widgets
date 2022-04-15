import { registerIcons } from "office-ui-fabric-react/lib/Styling";
import * as React from "react";

export class IconUtils {
	public static registerIcons(): void {
		registerIcons({
			icons: {
				"kr-crypto": (
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 122" >
						<path
							d="M61 0a60.69 60.69 0 1 0 61 60.69A60.84 60.84 0 0 0 61 0ZM49.41 84.36a30.47 30.47 0 0 0 8.2 2.36 41.76 41.76 0 0 0 6.22.44h1.83a35.16 35.16 0 0 0 8.2-1.21A21 21 0 0 0 87.28 75h12c-3.26 9-11.45 16.18-25.47 18.53v8h-8.2v-7.19h-2.33c-2 0-3.87-.09-5.72-.24v7.43h-8.2v-8.67c-17.76-4.22-26.72-16.8-26.72-31.77 0-14.33 8.88-27.54 26.77-32.11V19.8h8.2v7.77c2-.18 4-.28 6.17-.28h1.88V19.8h8.2V28c15 2.32 23.29 9.91 25.5 19h-12c-2.29-5.07-6.26-9.24-13.5-11.23a36.51 36.51 0 0 0-8.2-1.21c-.76 0-1.55-.05-2.36-.05a39.43 39.43 0 0 0-5.69.39 29.72 29.72 0 0 0-8.2 2.32c-9.94 4.52-14.21 14-14.21 23.61 0 9.28 4.06 18.92 14.21 23.53Z"
							style={{
								fill: "#34C7D1",
							}}
						/>
					</svg>
				),
			},
		});
	}
}