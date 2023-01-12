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


  loginform: any = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })


  
  get f() {
    return this.loginform.controls;
  }

  logincheck(){
    this.api.userLogin(this.loginform.value).subscribe({

      // console.log('res from reg. : ',res)
      next: (res) => {
      
        localStorage.setItem('user-token', res.token);
        // console.log("res from login  ", res);   //to view token in browser
        alert(res.status);
        localStorage.setItem('user-name', res.user);
        // localStorage.setItem('user-role', res.role);
        this.router.navigate(['/userhome']);
      
      },
      error: (err) => {
      
        console.log("error from login ", err);     //to view error in browser
        alert(`Error...  ${err.error}`);
      
      }
      })
  }

}
