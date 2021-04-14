export interface Tag{
    tag_name: string
}

export interface Content {
    content_id: string;
    content_name: string;
    content_image: string;
    content_social_description: string;
    content_date_literal_range: string;
    content_date_start: string;
    content_date_end: string;
    tags: Tag[]
}