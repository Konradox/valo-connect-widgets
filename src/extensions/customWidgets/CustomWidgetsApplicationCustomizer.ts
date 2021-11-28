import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";
import { WidgetLoader } from '../../loaders/WidgetLoader';

import * as strings from "CustomWidgetsApplicationCustomizerStrings";

const LOG_SOURCE: string = "CustomWidgetsApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICustomWidgetsApplicationCustomizerProperties {
	// This is an example; replace with your own property
	testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CustomWidgetsApplicationCustomizer extends BaseApplicationCustomizer<ICustomWidgetsApplicationCustomizerProperties> {
	@override
	public onInit(): Promise<void> {
		const loader = new WidgetLoader(this.context);
		loader.registerWidgets();

		return Promise.resolve();
	}
}
