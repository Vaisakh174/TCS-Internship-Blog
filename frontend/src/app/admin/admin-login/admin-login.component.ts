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

  loginform: any = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })


  
  get f() {
    return this.loginform.controls;
  }

  logincheck(){
    // console.log('val= ',this.loginform.value)
    this.api.adminLogin(this.loginform.value).subscribe({

      // console.log('res from reg. : ',res)
      next: (res) => {
      
        localStorage.setItem('admin-token', res.token);
        // console.log("res from login  ", res);   //to view token in browser
        alert(res.status);
        localStorage.setItem('admin-name', res.user);
        // localStorage.setItem('user-role', res.role);
        this.router.navigate(['/adminhome']);
      
      },
      error: (err) => {
      
        console.log("error from login ", err);     //to view error in browser
        alert(`Error...  ${err.error}`);
      
      }
      })

  }


}
