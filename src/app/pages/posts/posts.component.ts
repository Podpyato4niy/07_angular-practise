import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Post } from 'src/app/models/post';
import { AppStorageService } from 'src/app/services/app-storage.service';

@Component({
  selector: 'cp-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts: Post[] = []
  private subscribe: Subscription | null = null

  constructor(private appStorage: AppStorageService) {}

  ngOnInit(): void {
    this.subscribe = this.appStorage.getPosts()
      .subscribe(data => {
        console.log(data)
        this.posts = data
      })
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe()
  }
}
