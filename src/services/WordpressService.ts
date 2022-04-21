import { WordpressPost } from '../model/Post';

export class WordpressService {
    public async getPosts(serverUrl: string, postsCount: number = 5): Promise<WordpressPost[]> {
        if (serverUrl.indexOf('wordpress.com') > 8) {
            return await this.getPostsFromWordpressServer(serverUrl.replace(/\/$/, ""), postsCount);
        }
        return await this.getPostsFromSelfHostedServer(serverUrl.replace(/\/$/, ""), postsCount);
    }

    protected async getPostsFromSelfHostedServer(serverUrl: string, postsCount): Promise<WordpressPost[]> {
        const response = await fetch(`${serverUrl}/wp-json/wp/v2/posts?_embed&per_page=${postsCount}`);
        if (response.ok) {
            return await response.json();
        }
    }

    protected async getPostsFromWordpressServer(serverUrl: string, postsCount): Promise<WordpressPost[]> {
        const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${serverUrl.substring(8)}/posts?_embed&per_page=${postsCount}`);
        if (response.ok) {
            return await response.json();
        }
    }
}
