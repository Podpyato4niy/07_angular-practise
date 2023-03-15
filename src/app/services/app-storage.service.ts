import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { IPost } from '../interfaces/post';

import { ApiService } from './api.service';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  private comments: Comment[] | null = null
  private posts: Post[] | null = null
  
  constructor(
    private API: ApiService,
    private dataService: DataService
  ) { }

  public getPosts(): Observable<Post[] | never> {
    if (this.posts) {
      return of(this.posts)
    } else {
      return this.dataService.getData<Post, IPost>(`${this.API.SOURCE['posts']}`, Post)
        .pipe(
          map((res: Post[]) => {
            this.posts = res
            return this.posts
          })
        )
    }
  }
}
