import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss']
})
export class CommentPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() postCreated = new EventEmitter();

  isAuthorized = false;
  isOwned = true;
  isLogIn = true;
  canEdit = false;

  anonymous = false;
  user = 'jguim002';
  inputTitle = '';
  inputData = '';

  onAddPost()
  {
    const post =
    {
      nickname: this.user,
      isHidden: this.anonymous,
      title: this.inputTitle,
      content: this.inputData
    };
    this.canEdit = true;
    this.postCreated.emit(post);
  }

  authorize()
  {
    if(this.isAuthorized)
    {
      this.isAuthorized = false;
    }else{
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
