import { IComment } from "../interfaces/comment";

class UserComment implements IComment{
    public readonly id!: string;
    public postId!: number;
    public email!: string;
    public body!: string;
    public name!: string;
    public testProp = 12;

    constructor(obj: IComment) {
        Object.assign(this, obj)
    }
}