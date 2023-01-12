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

  addUser: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password1: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password2: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  get f() {
    return this.addUser.controls;
  }


  checkRegistration() {
    if (this.addUser.value.password1 != this.addUser.value.password2) {
      console.log('pass not match')
      alert('Re-Entered Password Miss-Match')
    }
    else {
this.api.userRegister(this.addUser.value).subscribe({

// console.log('res from reg. : ',res)
next: (res) => {

 
  // console.log("success from reg  ", res);   //to view token in browser
  alert(res.status);
  this.router.navigate(['/user']);

},
error: (err) => {

  // console.log("error from reg ", err);     //to view error in browser
  alert(`Error...  ${err.error}`);

}
})

    }

  }




}
