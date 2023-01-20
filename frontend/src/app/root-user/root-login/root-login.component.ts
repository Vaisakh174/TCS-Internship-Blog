import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RootUserApiService } from '../root-user-api.service';

@Component({
  selector: 'app-root-login',
  templateUrl: './root-login.component.html',
  styleUrls: ['./root-login.component.scss']
})
export class RootLoginComponent {

  constructor(private api: RootUserApiService, private router: Router) { }

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
    
    this.api.rootUserLogin(this.loginform.value).subscribe({

      // console.log('res from reg. : ',res)
      next: (res) => {
      
        localStorage.setItem('root-user-token', res.token);
        // console.log("res from login  ", res);   //to view token in browser
        alert(res.status);
        localStorage.setItem('root-user-name', res.user);
        // localStorage.setItem('root-user-role', res.role);
        this.router.navigate(['/rootuserhome']);
      
      },
      error: (err) => {
        this.loginform.reset()
        console.log("error from login ", err);     //to view error in browser
        alert(`Error...  ${err.error}`);
      
      }
      })

  }


}
