import React from 'react';
import { WordpressPost } from '../../../model/Post';
import { Post } from './Post/Post';

export const Posts = (props: {posts: WordpressPost[]}) => {
    const renderPosts = () => {
        const posts = props.posts.map(post => {
            return <Post post={post} />;
        });
        return posts;
    };

    return <div>
        {renderPosts()}
    </div>;
};