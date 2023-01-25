import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
  constructor(private route: ActivatedRoute, public api: UserApiService, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id']
    this.getdata()
  }


  _id: any
  categoris: any
  post: any
  loaderShow:any

  editpost: any = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(5)]),
    content: new FormControl("", [Validators.required, Validators.minLength(10)]),
    category: new FormControl("", [Validators.required, Validators.minLength(2)])

  })


  getdata() {
    this.loaderShow=true
    this.api.getbyidpost(this._id).subscribe((res) => {
      this.post = res
      // console.log(this.post)
      this.editpost.setValue({
        title: this.post.title,
        content: this.post.content,
        category: this.post.category
      })
      this.api.getallcategories().subscribe((res) => {
        this.categoris = res
        // console.log(this.categoris)
        this.loaderShow=false
      })
    })
  }



  submit() {

    this.loaderShow=true
    this.editpost.value = { ...this.editpost.value,"user_id": this.api.getuser_id(), "user_name": this.api.getuser_name() }
    // console.log('aas',this.editpost.value)
    this.api.updatepost(this.editpost.value, this._id).subscribe({
      next: (res => {
        alert("Data saved successfully");
        // console.log("incoming data from blog post", res);
        this.loaderShow=false
        this.router.navigate(['userhome/view-blogs']);
      }),
      error: (err => {
        this.loaderShow=false
        alert(`Error occured ${err.error}`)

      })
    })
    
  };

}
