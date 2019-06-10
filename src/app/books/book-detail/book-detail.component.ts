import { Comment } from './../comments/comment.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit
{

  storedPosts = [];

  constructor() { }

  ngOnInit() {
  }

  onPostAdded(post: Comment)
  {
    this.storedPosts.push(post);
  }

}
