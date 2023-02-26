import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(public api: UserApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id']
    this.getdata()
  }

  _id: any
  loaderShow: any
  email: any

  getdata() {
    this.loaderShow = true
    this.api.getEmail(this._id).subscribe({
      next: (res) => {
        // console.log(res)
        this.email = res.email
        this.loaderShow = false
      },
      error: (err) => {
        this.loaderShow = false
        alert(err.error.status)
        this.router.navigate(['/']);
      }
    })
  }

  changePasswordForm: any = new FormGroup({
    password1: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password2: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  get f() {
    return this.changePasswordForm.controls;
  }

  submit() {
    this.loaderShow = true
    if (this.changePasswordForm.value.password1 != this.changePasswordForm.value.password2) {
      console.log('pass not match')
      this.loaderShow = false
      alert('Re-Entered Password Miss-Match')
    }
    else {
      this.api.updatePassword({ password: this.changePasswordForm.value.password1, _id: this._id }).subscribe({
        // console.log('res from reg. : ',res)
        next: (res) => {
          // console.log("success from reg  ", res);   //to view token in browser
          this.loaderShow = false
          alert(res.status);
          this.router.navigate(['/user']);
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow = false
          alert(`Error...  ${err.error.status}`);
          this.router.navigate(['/']);
        }
      })

    }

  }
}
