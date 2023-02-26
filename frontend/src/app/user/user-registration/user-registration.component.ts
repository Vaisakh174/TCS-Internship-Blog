import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  constructor(private api: UserApiService, private router: Router) { }

  ngOnInit(): void {
  }

  loaderShow: any

  addUser: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password1: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password2: new FormControl("", [Validators.required, Validators.minLength(5)]),
    otp: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  })
  showTimer = false
  countdown = 120;
  time:any
  timer() {
    this.showTimer = true
     this.time = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.time);
        // handle timer expiry
        this.showTimer = false
        alert('Your OTP Is Expired')
      }
    }, 1000);
  }

  get f() {
    return this.addUser.controls;
  }


  checkRegistration() {
    this.loaderShow = true
    if (this.addUser.value.password1 != this.addUser.value.password2) {
      console.log('pass not match')
      this.loaderShow = false
      alert('Re-Entered Password Miss-Match')
    }
    else {
      this.api.userRegister(this.addUser.value).subscribe({

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
          this.addUser.reset()
        }
      })

    }

  }

  textForGenerateOtp = 'Generate OTP'
  generateOtp() {
    this.loaderShow = true

    if (this.addUser.controls.email.status == 'INVALID') {
      this.loaderShow = false
      alert('Email Is Invalid')
      // console.log(this.addUser.controls.email.status)
    }
    else {
      this.api.generateOtp({ email: this.addUser.value.email }).subscribe({

        // console.log('res from reg. : ',res)
        next: (res) => {
          // console.log("success from reg  ", res);   //to view token in browser
          this.textForGenerateOtp = "Regenerate OTP"
          this.loaderShow = false
          alert(res.status);
          this.timer()
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow = false
          alert(`Error...  ${err.error.status}`);
          this.addUser.reset()
        }
      })
    }
  }



  verifyOtp() {
    this.loaderShow = true
    if (this.addUser.controls.email.status == 'INVALID') {
      this.loaderShow = false
      alert('Email Is Invalid')
      // console.log(this.addUser.controls.email.status)
    } else if (this.addUser.controls.otp.status == 'INVALID') {
      this.loaderShow = false
      alert('OTP Is Invalid')
      // console.log(this.addUser.controls.otp.status)
    }

    else {
      this.api.verifyOtp({ otp: this.addUser.value.otp, email: this.addUser.value.email }).subscribe({

        // console.log('res from reg. : ',res)
        next: (res) => {
          // console.log("success from reg  ", res);   //to view token in browser
          this.loaderShow = false
          alert(res.status);
          clearInterval(this.time);
          this.showTimer = false
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow = false
          alert(`Error...  ${err.error.status}`);
          // this.addUser.reset()
        }
      })
    }

  }


}
