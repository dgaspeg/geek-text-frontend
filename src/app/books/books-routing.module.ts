import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentPostComponent } from './comments/comment-post/comment-post.component';

const routes: Routes = [
  {path: 'viewBook',
  component: CommentPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
