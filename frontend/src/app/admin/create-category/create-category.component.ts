import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
  constructor(public api: AdminApiService, private router: Router) { }

  ngOnInit(): void {
  }


  loaderShow:any

  newcategory: any = new FormGroup({
    category: new FormControl("", [Validators.required, Validators.minLength(3)])
  })


  submit() {
    this.loaderShow=true
    this.api.newcategory(this.newcategory.value).subscribe({
      next: (res => {
        alert("Data saved successfully");
        // console.log("incoming data from blog post", res);
        this.loaderShow=false
        this.router.navigate(['/adminhome']);
      }),
      error: (err => {
        this.loaderShow=false
        alert(`Error occured ${err.error}`)

      })
    })

  };
}
