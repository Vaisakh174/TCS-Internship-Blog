import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-a-post',
  templateUrl: './edit-a-post.component.html',
  styleUrls: ['./edit-a-post.component.scss']
})
export class EditAPostComponent {
  constructor(public api: AdminApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id']
    this.getdata()
  }

  loaderShow:any
  _id: any
  categoris: any
  post: any


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
    // this.editpost.value = { ...this.editpost.value,"user_id": this.api.getadminid(), "user_name": this.api.getadminname() }
    console.log('aas', this.editpost.value)
    this.api.updatepost(this.editpost.value, this._id).subscribe({
      next: (res => {
        this.loaderShow=false
        alert("Data saved successfully");
        console.log("incoming data from blog post", res);
        this.router.navigate(['/adminhome']);
      }),
      error: (err => {
        this.loaderShow=false
        alert(`Error occured ${err.error}`)

      })
    })

  };

}
