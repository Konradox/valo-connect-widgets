import React from "react";
import { WordpressPost } from "../../../../model/Post";
import styles from "./Post.module.scss";
import { Image } from "@fluentui/react-northstar";

export const Post = (props: { post: WordpressPost }) => {
	const getImage = () => {
		if (props.post["_embedded"] && props.post["_embedded"]["wp:featuredmedia"] && props.post["_embedded"]["wp:featuredmedia"][0])
			return props.post["_embedded"]["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
		else return require("../../../../assets/wordpress.jpg");
	};

	return (
		<div className={styles.post}>
			<Image
				circular
				src={getImage()}
				width={50}
				styles={{
					maxWidth: "50px",
				}}
			/>
			<a href={props.post.link} target="_blank">
				{props.post.title.rendered.replace("&#8211;", "-").replace("&#038;", "&").replace("&#8230;", "…").replace("&nbsp;", " ").replace("&#8217;", "'").replace("&#8216;", "'").replace("&#8220;", '"').replace("&#8221;", '"').replace("&#039;", "'").replace("&#8220;", '“')}
			</a>
		</div>
	);
};
