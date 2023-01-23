import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootUserApiService } from '../root-user-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent {
  constructor(public api: RootUserApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id']
    this.getdata()
  }

  _id: any
  user: any
  data: any
  disableEmail = true
  email: any
  loaderShow:any

  editAdmin: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password1: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password2: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  getdata() {
    this.loaderShow=true
    this.api.getbyidadmin(this._id).subscribe((res) => {
      this.user = res
      this.email = this.user.email
      this.editAdmin.setValue({name:this.user.name,password1:'',
      password2:''})
      // console.log(this.user)
      this.loaderShow=false
    })
  }



  get f() {
    return this.editAdmin.controls;
  }

  submit() {
    this.loaderShow=true
    if (this.editAdmin.value.password1 != this.editAdmin.value.password2) {
      console.log('pass not match')
      this.loaderShow=false
      alert('Re-Entered Password Miss-Match')
    }
    else {
      this.api.updateadmin(this.editAdmin.value, this._id).subscribe({
        // console.log('res from reg. : ',res)
        next: (res) => {
          this.data = res
          // console.log("success from reg  ", res);   //to view token in browser
          this.loaderShow=false
          alert(this.data.status);

          this.router.navigate(['/rootuserhome']);
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow=false
          alert(`Error...  ${err.error}`);
          this.editAdmin.reset()
        }
      })

    }
  }
}


