import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent {

  constructor(public api: AdminApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.editEnable = false
    this.getdata()

  }

  loaderShow:any
  viewcategory: any
  editEnable = false
  edit_id: any

  getdata() {
    this.loaderShow=true
    this.api.getallcategories().subscribe((resp) => {
      this.viewcategory = resp
      this.loaderShow=false
    })
  }

  editcategory: any = new FormGroup({
    category: new FormControl("", [Validators.required, Validators.minLength(3)])
  })

  submit() {
    this.loaderShow=true
    this.api.updatecategory(this.editcategory.value, this.edit_id).subscribe({
      next: (res) => {
        this.loaderShow=false
        alert("Category Updated Successfully")
        this.getdata()
        this.editEnable = false
      },
      error: (err) => {
        this.loaderShow=false
        alert(err.error)
      }
    })

  }
  closeEditform() {
    this.loaderShow=true
    this.editEnable = false
    this.editcategory.reset()
    this.loaderShow=false
    this.router.navigate(['adminhome/manage_categorys'])
  }


  oldcategory: any
  edit(_id: any) {
    this.loaderShow=true
    this.editEnable = true
    this.edit_id = _id
    this.api.getbyidcategory(_id).subscribe((res) => {
      this.oldcategory = res
      this.editcategory.setValue({ category: this.oldcategory.category })
      this.loaderShow=false
    })

  }

  deletes(_id: any) {
    this.loaderShow=true
    this.api.deletecategory(_id).subscribe({
      next: (res) => {
        this.loaderShow=false
        alert("Post Deleted Successfully")
        this.getdata()
      },
      error: (err) => {
        this.loaderShow=false
        alert(err.error)
      }
    })
  }


  readmore(category: any) {
    this.loaderShow=true
    this.router.navigate([`adminhome/readPostBycategory/${category}`])
    this.loaderShow=false
  }



}
