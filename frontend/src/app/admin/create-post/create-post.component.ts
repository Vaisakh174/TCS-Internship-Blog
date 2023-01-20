import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  constructor(public api: AdminApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata()
  }

  categoris: any


  editpost: any = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(5)]),
    content: new FormControl("", [Validators.required, Validators.minLength(10)]),
    category: new FormControl("", [Validators.required, Validators.minLength(2)])

  })


  getdata() {
    this.api.getallcategories().subscribe((res) => {
      this.categoris = res
      // console.log(this.categoris)
    })
  }



  submit() {


    this.editpost.value = { ...this.editpost.value, "user_id": this.api.getadminid(), "user_name": this.api.getadminname() }
    // console.log('aas', this.editpost.value)
    this.api.newpost(this.editpost.value).subscribe({
      next: (res => {
        alert("Data saved successfully");
        // console.log("incoming data from blog post", res);
        this.router.navigate(['/adminhome']);
      }),
      error: (err => {
        alert(`Error occured ${err.error}`)

      })
    })

  };
}
