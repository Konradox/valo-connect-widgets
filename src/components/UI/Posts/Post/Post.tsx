import React from "react";
import { WordpressPost } from "../../../../model/Post";
import styles from "./Post.module.scss";
import { Image } from "@fluentui/react-northstar";

export const Post = (props: { post: WordpressPost }) => {
	return (
		<div className={styles.post}>
			<Image
				src={props.post["_embedded"]["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}
				width={50}
				styles={{
					maxWidth: "50px",
				}}
			/>
			<a href={props.post.link}>{props.post.title.rendered.replace('&#8211;', '-').replace('&#038;', '&').replace('&#8230;', '…')}</a>
		</div>
	);
};
