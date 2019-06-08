import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CommentPostComponent } from './comments/comment-post/comment-post.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

@NgModule({
  declarations: [CommentPostComponent, BookDetailComponent, CommentListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
