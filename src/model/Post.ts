export interface WordpressPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: GuidOrTitle;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: GuidOrTitle;
    content: ContentOrExcerpt;
    excerpt: ContentOrExcerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta?: null[] | null;
    categories?: number[] | null;
    tags?: (number | null)[] | null;
    lang: string;
    translations: Translations;
    yoast_head: string;
    pll_sync_post?: null[] | null;
    _links: Links;
}
export interface GuidOrTitle {
    rendered: string;
}
export interface ContentOrExcerpt {
    rendered: string;
    protected: boolean;
}
export interface Translations {
    en: number;
}
export interface Links {
    self?: HrefLink[] | null;
    collection?: HrefLink[] | null;
    about?: HrefLink[] | null;
    author?: EmbeddableHrefLink[] | null;
    replies?: EmbeddableHrefLink[] | null;
    'version-history'?: VersionHistoryEntity[] | null;
    'predecessor-version'?: PredecessorVersionEntity[] | null;
    'wp:featuredmedia'?: EmbeddableHrefLink[] | null;
    'wp:attachment'?: HrefLink[] | null;
    'wp:term'?: TermEntity[] | null;
    curies?: CuriesEntity[] | null;
}
export interface HrefLink {
    href: string;
}
export interface EmbeddableHrefLink extends HrefLink {
    embeddable: boolean;
    href: string;
}
export interface VersionHistoryEntity {
    count: number;
    href: string;
}
export interface PredecessorVersionEntity {
    id: number;
    href: string;
}
export interface TermEntity {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}
export interface CuriesEntity {
    name: string;
    href: string;
    templated: boolean;
}
