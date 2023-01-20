import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.scss']
})
export class ViewBlogsComponent {
  constructor(public api: UserApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata();
  }


  posts: any = [{
    title: '',
    content: '',
    user_id: '',
    user_name: '',
    category: ''
  }];
  resp: any
  comments: any = [{
    content: '',
    user_id: '',
    user_name: '',
    post_id: ''
  }]

  _loaderShow = false;
  i = 0;
  postLength = 0;
  flag = 0
  editAcommentflag = false

  getdata() {
    // this._loaderShow=true;
    this.i = 0
    this.api.getallposts().subscribe({
      next: (res) => {
        // console.log(res)
        this.posts = res
        this.postLength = this.posts.length - 1
        this.check_user()
        this.getcomments()

      },
      error: (err) => {
        alert(err.error)
      }

    })
  }

  commentform: any = new FormGroup({
    content: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  editform: any = new FormGroup({
    content: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  submitComment() {
    this.commentform.value = { ...this.commentform.value, "user_id": this.api.getuser_id(), "user_name": this.api.getuser_name(), "post_id": this.posts[this.i]._id }
    // console.log('commentform:', this.commentform.value)
    this.api.newcomment(this.commentform.value).subscribe((res) => {
      alert('Your Comment is Now Posted')
      this.getcomments()
      this.commentform.reset()
    })

  }



  check_user() {
    if (this.api.getuser_id() != this.posts[this.i].user_id) {
      this.flag = 1
      // console.log(this.flag)
      // console.log(this.api.getuser_id())
      // console.log(this.posts[this.i])
    }
    else {
      this.flag = 0
      // console.log(this.flag)
    }

  }
  del: any
  Deletecomment(_id: any) {
    this.api.deletecomment(_id).subscribe({
      next: (res) => {
        this.del = res
        alert(this.del.status)
        this.getcomments()
      }, error: (err) => {

        alert(err.error)
      }
    })

  }



  edit_id: any
  Editcomment(_id: any) {
    this.editAcommentflag = true
    this.edit_id = _id
  }

  updateresp: any
  updateComment() {
    this.api.updatecomment(this.editform.value, this.edit_id).subscribe({
      next: (res) => {
        this.updateresp = res
        alert(this.updateresp.status)
        this.close()
        this.getcomments()
        this.editform.reset()
      }, error: (err) => {
        alert(err.error)
      }
    })

  }


  close() {
    this.editAcommentflag = false
    this.editform.reset()
  }

  previous() {
    if (this.i != 0) {
      this.i--
      this.check_user()
      this.getcomments()
    }
    else {
      alert('You Reached First Post')
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


  next() {
    if (this.postLength > this.i) {
      this.i++
      this.check_user()
      this.getcomments()

    }
    else {
      alert('You Reached Last Post')
    }
  }

  edit() {
    if (this.flag == 0) {
      this.router.navigate([`/userhome/edit-post/${this.posts[this.i]._id}`])
    } else {
      alert('You are Not Owner of This Post')
    }
  }


  deletes() {
    if (this.flag == 0) {
      this.api.deletepost(this.posts[this.i]._id).subscribe({
        next: (res) => {
          this.getdata()
          alert('Post is Now Deleted')
        },
        error: (err) => {
          alert(`Error... ${err.error}`)
        }
      })
    }
    else {
      alert('You are Not Owner of This Post')
    }
  }




}
