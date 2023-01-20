import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent {
  constructor(public api: UserApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata()

  }
  categories: any
  posts: any = [{
    title: '',
    content: '',
    user_id: '',
    user_name: '',
    category: ''
  }];

  comments: any = [{
    content: '',
    user_id: '',
    user_name: '',
    post_id: ''
  }]
  
  not_found = false
  j = 0;
  postLength = 0;
  flag = 0

  commentform: any = new FormGroup({
    content: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  editform: any = new FormGroup({
    content: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  getdata() {
    this.j = 0;
    this.not_found = true
    this.api.getallcategories().subscribe((res) => {
      this.categories = res
      // console.log('cat', this.categories[0].category)

      this.api.getpostbycategory(this.categories[0].category).subscribe({
        next: (res) => {
          this.not_found = false
          this.posts = res
          // console.log('post', this.posts)
          this.postLength = this.posts.length - 1
          this.check_user()
          this.getcomments()
        },
        error: (err) => {
          this.not_found = true
        }
      })
    })
  }


  goToCategory(cat: any) {
    this.j = 0
    this.api.getpostbycategory(cat).subscribe({
      next: (res) => {
        this.not_found = false
        this.posts = res
        // console.log('post= ', this.posts)
        this.postLength = this.posts.length - 1
        this.check_user()
        this.getcomments()
      },
      error: (err) => {
        this.not_found = true

      }
    })
  }

  check_user() {
    if (this.api.getuser_id() != this.posts[this.j].user_id) {
      this.flag = 1
      // console.log(this.flag)
      // console.log(this.api.getuser_id())
      // console.log(this.j)
      // console.log(this.posts[this.j].user_id)
    }
    else {
      this.flag = 0
      // console.log(this.flag)
    }
  }

  previous() {
    if (this.j != 0) {
      this.j--
      this.check_user()
      this.getcomments()
    }
    else {
      alert('You Reached First Post')
    }
  }

  next() {
    if (this.postLength > this.j) {
      this.j++
      this.check_user()
      this.getcomments()
    }
    else {
      alert('You Reached Last Post')
    }
  }

  edit() {
    if (this.flag == 0) {
      this.router.navigate([`/userhome/edit-post/${this.posts[this.j]._id}`])
    } else {
      alert('You are Not Owner of This Post')
    }
  }


  deletes() {
    if (this.flag == 0) {
      this.api.deletepost(this.posts[this.j]._id).subscribe({
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

  submitComment() {
    this.commentform.value = { ...this.commentform.value, "user_id": this.api.getuser_id(), "user_name": this.api.getuser_name(), "post_id": this.posts[this.j]._id }
    // console.log('commentform:', this.commentform.value)
    this.api.newcomment(this.commentform.value).subscribe((res) => {
      alert('Your Comment is Now Posted')
      this.getcomments()
      this.commentform.reset()
    })

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


  editAcommentflag = false
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

  latestComment = ""
  getcomments() {
    this.api.getcommentbyid(this.posts[this.j]._id).subscribe((res) => {
      this.comments = res

      if (this.comments.length > 0) {
        this.latestComment = 'Latest Comments:'
      } else {
        this.latestComment = 'Sorry No Comment Posted Yet'
      }
    })
  }

}
