import { IPost } from '../interfaces/post';

export class Post implements IPost {
   public readonly id!: string;
   public userId!: number;
   public title!: string;
   public body!: string;

   constructor(obj: IPost) {
      Object.assign(this, obj)
   }
}
