import { IComment } from "../interfaces/icomment";

export class CommentClass implements IComment {
    readonly id!: string;
    name!: string;
    postId!: number;
    email!: string;
    body!: string;
    constructor(){
        
    }
}
