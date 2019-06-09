import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss']
})
export class CommentPostComponent implements OnInit {

  @Output() postCreated = new EventEmitter<Comment>();

  isAuthorized = false;
  isOwned = true;
  isLogIn = true;

  bookId = 0;
  anonymous = false;
  email = 'jguim002';
  inputTitle = '';
  inputData = '';
  bookRating: number;

  constructor() { }

  ngOnInit() {
  }


  onAddPost()
  {
    const post: Comment =
    {
      bookID: this.bookId,
      title: this.inputTitle,
      comment: this.inputData,
      email: this.email,
      isHidden: this.anonymous,
      rating: this.bookRating
    };
    this.postCreated.emit(post);
  }

  authorize()
  {
    if(this.isAuthorized)
    {
      this.isAuthorized = false;
    }
    else
    {
      this.isAuthorized = true;
    }
  }

  own()
  {

    if(this.isOwned)
    {
      this.isOwned = false;
    } else{
      this.isOwned = true;
    }
  }

  logIn()
  {

    if(this.isLogIn)
    {
      this.isLogIn = false;
    } else{
      this.isLogIn = true;
    }
  }

}
