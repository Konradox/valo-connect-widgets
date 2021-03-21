import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { WidgetLoader } from '../../loaders/WidgetLoader';

const LOG_SOURCE: string = 'CustomConnectWidgetsApplicationCustomizer';

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CustomConnectWidgetsApplicationCustomizer extends BaseApplicationCustomizer<{}> {
    @override
    public onInit(): Promise<void> {
        const loader = new WidgetLoader(this.context);
        loader.registerWidgets();
        return Promise.resolve();
    }
}
