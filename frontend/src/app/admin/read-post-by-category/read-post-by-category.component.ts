import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-read-post-by-category',
  templateUrl: './read-post-by-category.component.html',
  styleUrls: ['./read-post-by-category.component.scss']
})
export class ReadPostByCategoryComponent {
  constructor(public api: AdminApiService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.category=this.route.snapshot.params['category']
    this.getdata();
  }
  loaderShow:any
  
  posts: any = [{
    title: '',
    content: '',
    user_id: '',
    user_name: '',
    category: ''
  }];

i=0
category:any
postLength = 0;
notFound=false
getdata() {
  this.loaderShow=true
  this.i = 0
  this.api.searchpostbycategory(this.category).subscribe({
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
