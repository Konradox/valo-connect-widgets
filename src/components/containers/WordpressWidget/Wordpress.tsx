import React, { useState, useEffect } from 'react';
import { WordpressPost } from '../../../model/Post';
import { WordpressService } from '../../../services/WordpressService';
import { Posts } from '../../UI/Posts/Posts';
import { WordpressProps } from './WordpressConfig';

export const Wordpress = (props: WordpressProps) => {
    const [postsState, setPostsState] = useState<WordpressPost>([]);

    useEffect(async () => {
        if (props.server) {
            let ws = new WordpressService();
            let posts = await ws.getPosts(props.server, props.postsCount);
            setPostsState(posts);
        }
    }, []);

    return <Posts posts={postsState} />;
};
