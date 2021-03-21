import React, { useState } from 'react';
import { ConnectWidgetConfigurationProps } from '@valo/extensibility/lib/models/connectWidget/ConnectWidgetConfigurationComponent';
import { Input, InputProps } from '@fluentui/react-northstar/dist/es/components/Input/Input';

export interface WordpressProps {
    server: string;
    postsCount: number;
}

export const WordpressConfig = (props: ConnectWidgetConfigurationProps<WordpressProps>) => {
    const [serverState, setServerState] = useState<string>(props.widgetConfiguration ? props.widgetConfiguration.server : '');
    const [postsCountState, setPostsCountState] = useState<number>(props.widgetConfiguration ? props.widgetConfiguration.postsCount : '');

    const updateConfig = () => props.onConfigurationUpdated({ postsCount: postsCountState, server: serverState });

    const serverChange = (_element, data: InputProps) => {
        setServerState(data.value);
        updateConfig();
    };

    const postsCountChange = (_element, data: InputProps) => {
        setPostsCountState(data.value);
        updateConfig();
    };

    return (
        <div>
            <Input label="Server URL" onChange={serverChange} />
            <Input label="Posts count" onChange={postsCountChange} type="number" />
        </div>
    );
};
