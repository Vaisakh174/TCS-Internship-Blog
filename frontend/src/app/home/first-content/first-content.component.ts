import { Component } from '@angular/core';
import { UserApiService } from 'src/app/user/user-api.service';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent {

  constructor(public api: UserApiService) { }

  ngOnInit(): void {
    this.getdata();
  }

  posts: any = [{
    title: 'aaa',
    content: 'bbb',
    user_id: 'ccc',
    user_name: 'ddd',
    category: 'eee'
  }];

  comments: any = [{
    content: '',
    user_id: '',
    user_name: '',
    post_id: ''
  }]

  // _id=this.api.mydata;
  _loaderShow = false;
  i = 0;
  postLength = 0;

  getdata() {
    // this._loaderShow=true;
    this.i = 0
    this.api.getallposts().subscribe({
      next: (res) => {
        // console.log(res)
        this.posts = res
        this.postLength = this.posts.length - 1
        this.getcomments()
      },

      error: (err) => {
        alert(err.error)
      }
    })

  }

  previous() {
    if (this.i != 0) {
      this.i--
      this.getcomments()
    }
    else {
      alert('You Reached First Post')
    }
  }

  next() {
    if (this.postLength > this.i) {
      this.i++
      this.getcomments()
    }
    else {
      alert('You Reached Last Post')
    }
  }


  latestComment = ""
  getcomments() {
    this.api.getcommentbyid(this.posts[this.i]._id).subscribe((res) => {
      this.comments = res

      if (this.comments.length > 0) {
        this.latestComment = 'Latest Comments:'
      } else {
        this.latestComment = 'Sorry No Comment Posted Yet'
      }
    })
  }

}
