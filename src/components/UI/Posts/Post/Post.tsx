import React from 'react';
import { WordpressPost } from '../../../../model/Post';
import styles from './Post.module.scss';
import { Image } from '@fluentui/react-northstar';

export const Post = (props: {post: WordpressPost}) => {
    console.log(props);
    return <div className={styles.post}>
        <img src={props.post['_embedded']['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} width={50} />
        <a href={props.post.link}>{props.post.title.rendered}</a>
    </div>;
};