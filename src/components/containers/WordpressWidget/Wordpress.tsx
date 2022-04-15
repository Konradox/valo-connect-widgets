import React, { useState, useEffect } from "react";
import { WordpressPost } from "../../../model/Post";
import { WordpressService } from "../../../services/WordpressService";
import { Posts } from "../../UI/Posts/Posts";
import { WordpressProps } from "./WordpressConfig";
import styles from "./Wordpress.module.scss";
import { ExclamationCircleIcon } from "@fluentui/react-northstar";
import * as strings from "CustomWidgetsApplicationCustomizerStrings";
import { ThemeProviderWrapper } from "../../UI/ThemeProviderWrapper";

export const Wordpress = (props: WordpressProps) => {
	const [posts, setPosts] = useState<WordpressPost[]>([]);
	const [error, setError] = useState<string>("");

	useEffect(async () => {
		if (props.server) {
			let ws = new WordpressService();
			try {
				let newPosts = await ws.getPosts(props.server, props.postsCount);
				setPosts(newPosts);
			} catch (error) {
				setError(error.message);
			}
		}
	}, []);

	const renderContent = () => {
		if (error) {
			return <div className={styles.error}><ExclamationCircleIcon outline />{strings.DomainNotSupported}</div>;
		}
		return <Posts posts={posts} />;
	};

	return (
		<ThemeProviderWrapper className={styles.widgetContainer}>
			{renderContent()}
		</ThemeProviderWrapper>
	);
};
