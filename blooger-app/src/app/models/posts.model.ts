export interface Posts {
    postId: string;
    userName: string;
    userId: string;
    title: string;
    content: string;
    date: string;
    isEdited?: boolean;
}

export interface newPost {
    title: string;
    content: string;
    date: string;
}