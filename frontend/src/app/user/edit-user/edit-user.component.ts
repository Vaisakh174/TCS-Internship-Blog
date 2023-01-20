import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  constructor(public api: UserApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id']
    this.getdata()
  }

  _id: any
  user: any
  data: any
  disableEmail = true
  email: any

  editUser: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    // email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password1: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password2: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  getdata() {
    this.api.getAuser(this._id).subscribe((res) => {
      this.user = res
      this.email = this.user.email
      console.log(this.user)
    })
  }

  // setvalues() {
  //   this.editUser.setValue({
  //     name: this.user.name,
  //     email: this.user.email,
  //     password1: this.user.password.user,
  //     passwors2: this.user.password.user
  //   })
  // }

  get f() {
    return this.editUser.controls;
  }

  submit() {
    if (this.editUser.value.password1 != this.editUser.value.password2) {
      console.log('pass not match')
      alert('Re-Entered Password Miss-Match')
    }
    else {
      this.api.updateuser(this.editUser.value, this._id).subscribe({
        // console.log('res from reg. : ',res)
        next: (res) => {
          this.data = res
          // console.log("success from reg  ", res);   //to view token in browser
          alert(this.data.status);
          localStorage.clear()
          this.router.navigate(['/user']);
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          alert(`Error...  ${err.error}`);
          this.editUser.reset()
        }
      })

    }

  }




}