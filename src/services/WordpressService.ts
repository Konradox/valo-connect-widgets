import { WordpressPost } from '../model/Post';

export class WordpressService {
    public async getPosts(serverUrl: string, postsCount: number = 5): Promise<WordpressPost[]> {
        const response = await fetch(`${serverUrl}/wp-json/wp/v2/posts?_embed&per_page=${postsCount}`);
        if (response.ok) {
            return await response.json();
        }
    }
}
