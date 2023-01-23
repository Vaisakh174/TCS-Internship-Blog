import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  constructor(private api: UserApiService, private router: Router) { }

  ngOnInit(): void {

  }

  loaderShow:any

  loginform: any = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })



  get f() {
    return this.loginform.controls;
  }

  logincheck() {
    this.loaderShow=true
    this.api.userLogin(this.loginform.value).subscribe({
      // console.log('res from reg. : ',res)
      next: (res) => {
        localStorage.setItem('user_token', res.token);
        // console.log(  "res from login  ", res);   //to view token in browser
        localStorage.setItem('user_name', res.user_name);
        // localStorage.setItem('user_role', res.role);
        localStorage.setItem('user_id', res.user_id);
        alert(res.status);
        this.loaderShow=false
        this.router.navigate(['/userhome']);
      },
      error: (err) => {
        console.log("error from login ", err); 
        this.loaderShow=false    //to view error in browser
        alert(`Error...  ${err.error}`);
        this.loginform.reset()
      }
    })
  }

}
