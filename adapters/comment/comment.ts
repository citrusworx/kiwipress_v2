import {AuthorAdapter} from "../author/author" 

interface CommentAdapter {
    id: string;
    author: AuthorAdapter;
    content: string;
    createdAt: string;
    likes: {
        content: CommentAdapter[];
        count: Number;
    }
}