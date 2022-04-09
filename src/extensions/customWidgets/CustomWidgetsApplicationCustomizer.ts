import { override } from "@microsoft/decorators";
import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
import { WidgetLoader } from '../../loaders/WidgetLoader';

const LOG_SOURCE: string = "CustomWidgetsApplicationCustomizer";

export default class CustomWidgetsApplicationCustomizer extends BaseApplicationCustomizer<{}> {
	@override
	public onInit(): Promise<void> {
		const loader = new WidgetLoader(this.context);
		loader.registerWidgets();

		return Promise.resolve();
	}
}
