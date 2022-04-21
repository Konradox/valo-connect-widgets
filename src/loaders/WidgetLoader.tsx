import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { ConnectWidget, ConnectWidgetService } from '@valo/extensibility';
import { CryptoWidget } from '../widgets/CryptoWidget';
import { WordpressWidget } from '../widgets/WordpressWidget';

export class WidgetLoader {
    private connectWidgetService: ConnectWidgetService;

    constructor(private context: ApplicationCustomizerContext) {
        this.connectWidgetService = ConnectWidgetService.getInstance();
    }

    public async registerWidgets() {
        for(let w of this.widgets) {
            this.connectWidgetService.registerWidget(w);
        }
    }

    private widgets: ConnectWidget<any>[] = [
        new WordpressWidget(),
        new CryptoWidget()
    ];
}
