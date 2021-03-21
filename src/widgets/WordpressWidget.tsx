import React from 'react';
import { IIconProps } from '@microsoft/office-ui-fabric-react-bundle';
import { ConnectWidgetSize } from '@valo/extensibility';
import { ConnectWidget } from '@valo/extensibility/lib/models/connectWidget/ConnectWidget';
import { WordpressConfig, WordpressProps } from '../components/containers/WordpressWidget/WordpressConfig';
import { Wordpress } from '../components/containers/WordpressWidget/Wordpress';

export class WordpressWidget implements ConnectWidget<WordpressProps> {
    public title: string = 'Wordpress';
    public id: string = 'kr-wordpress-widget';
    public size: ConnectWidgetSize = ConnectWidgetSize.Single;
    public description?: string = 'Displays latest Wordpress posts';
    public iconProps?: IIconProps = { iconName: 'Blog' };
    public widgetComponentsFactory = (config: WordpressProps) => {
        return [{
            id: 'kr-wordpress-widget-1',
            title: 'Posts',
            content: <Wordpress server={config ? config.server : ''} postsCount={config ? config.postsCount : 5} />
        }];
    }
    public widgetConfigComponentFactory = (currentConfig: WordpressProps, onConfigUpdated: (config: WordpressProps) => void) => {
        return <WordpressConfig onConfigurationUpdated={onConfigUpdated} widgetConfiguration={currentConfig} />;
    }
}
