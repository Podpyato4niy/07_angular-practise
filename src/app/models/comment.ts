import { IComment } from "../interfaces/comment";

export class Comment implements IComment {
    readonly id!: string;
    name!: string;
    postId!: number;
    email!: string;
    body!: string;
    constructor(){
        
    }
}
