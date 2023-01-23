import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { RootUserApiService } from '../root-user-api.service';

@Component({
  selector: 'app-read-user-posts',
  templateUrl: './read-user-posts.component.html',
  styleUrls: ['./read-user-posts.component.scss']
})
export class ReadUserPostsComponent {

  constructor(public api: RootUserApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['_id']
    this.getdata();
  }

  posts: any = [{
    title: '',
    content: '',
    user_id: '',
    user_name: '',
    category: ''
  }];

i=0
_id:any
postLength = 0;
notFound=false
loaderShow:any

getdata() {
  this.loaderShow=true;
  this.i = 0
  this.api.searchpostbyuserId(this._id).subscribe({
    next: (res) => {
      // console.log(res)
      this.posts = res
      this.postLength = this.posts.length - 1
      this.loaderShow=false

    },
    error: (err) => {
      this.notFound=true
      // alert(err.error)
      this.loaderShow=false
    }

  })
}

  previous() {
    this.loaderShow=true
    if (this.i != 0) {
      this.i--

    }
    else {
      alert('You Reached First Post')
    }
    this.loaderShow=false
  }

  next() {
    this.loaderShow=true
    if (this.postLength > this.i) {
      this.i++



    }
    else {
      
      alert('You Reached Last Post')
    }
    this.loaderShow=false
  }

}