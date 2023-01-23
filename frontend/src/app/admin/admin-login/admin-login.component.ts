import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private api: AdminApiService, private router: Router) { }

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
    // console.log('val= ',this.loginform.value)
    this.api.adminLogin(this.loginform.value).subscribe({

      // console.log('res from reg. : ',res)
      next: (res) => {

        localStorage.setItem('admin_token', res.admin_token);
        console.log("res from login  ", res);   //to view token in browser
        localStorage.setItem('admin_name', res.admin_name);
        localStorage.setItem('admin_id', res.admin_id);
        this.loaderShow=false
        alert(res.status);
        this.router.navigate(['/adminhome']);

      },
      error: (err) => {
        this.loginform.reset()
        console.log("error from login ", err);     //to view error in browser
        this.loaderShow=false
        alert(`Error...  ${err.error}`);

      }
    })

  }


}
