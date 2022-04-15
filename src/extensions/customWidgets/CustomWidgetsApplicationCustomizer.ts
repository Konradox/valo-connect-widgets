import { override } from "@microsoft/decorators";
import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
import { WidgetLoader } from '../../loaders/WidgetLoader';
import { IconUtils } from "../../utils/IconUtils";

const LOG_SOURCE: string = "CustomWidgetsApplicationCustomizer";

export default class CustomWidgetsApplicationCustomizer extends BaseApplicationCustomizer<{}> {
	@override
	public onInit(): Promise<void> {
		const loader = new WidgetLoader(this.context);
		IconUtils.registerIcons();
		loader.registerWidgets();
		return Promise.resolve();
	}
}
