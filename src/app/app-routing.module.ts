import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts',    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) },
  { path: 'comments', loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
