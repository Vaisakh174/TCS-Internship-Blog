import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-post-a-blog',
  templateUrl: './post-a-blog.component.html',
  styleUrls: ['./post-a-blog.component.scss']
})
export class PostABlogComponent {

  constructor(public api: UserApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata()
  }

  categoris :any
  loaderShow:any

  addPost: any = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(5)]),
    content: new FormControl("", [Validators.required, Validators.minLength(10)]),
    category: new FormControl("", [Validators.required, Validators.minLength(2)])

  })
getdata(){
  this.loaderShow=true
  this.api.getallcategories().subscribe((res)=>{
    this.categoris=res
    // console.log(this.categoris)
    this.loaderShow=false
  })}

  addpost() {
    this.loaderShow=true
    this.addPost.value = { ...this.addPost.value,"user_id": this.api.getuser_id(), "user_name": this.api.getuser_name() }
    this.api.newpost(this.addPost.value).subscribe({
      next: (res => {
        this.loaderShow=false
        alert("Data saved successfully");
        // console.log("incoming data from blog post", res);
        this.router.navigate(['userhome/view-blogs']);
      }),
      error: (err => {
        this.loaderShow=false
        alert(`Error occured ${err.error}`)
        // this.addPost.reset()
      })
    })
    this.addPost.reset()
  };
  
}
