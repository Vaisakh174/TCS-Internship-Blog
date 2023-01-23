import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RootUserApiService } from '../root-user-api.service';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent {

  constructor(public api: RootUserApiService, private router: Router) { }

  ngOnInit(): void {

  }

  data: any
  loaderShow:any

  addAdmin: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password1: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password2: new FormControl("", [Validators.required, Validators.minLength(5)])
  })





  get f() {
    return this.addAdmin.controls;
  }

  submit() {this.loaderShow=true
    if (this.addAdmin.value.password1 != this.addAdmin.value.password2) {
      console.log('pass not match')
      this.loaderShow=false
      alert('Re-Entered Password Miss-Match')
    }
    else {
      this.api.addadmin(this.addAdmin.value).subscribe({
        // console.log('res from reg. : ',res)
        next: (res) => {
          this.data = res
          this.loaderShow=false
          // console.log("success from reg  ", res);   //to view token in browser
          alert(this.data.status);

          this.router.navigate(['/rootuserhome']);
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow=false
          alert(`Error...  ${err.error}`);
          this.addAdmin.reset()
        }
      })

    }
  }
}
