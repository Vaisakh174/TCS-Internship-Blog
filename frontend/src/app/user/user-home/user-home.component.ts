import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
constructor(private router: Router, public api: UserApiService){}

  user_name: any
  user_id: any
  loaderShow:any

  ngOnInit(): void {
    this.user_name = this.api.getuser_name()
    this.user_id = this.api.getuser_id()
  }

  edit_profile(){
    this.loaderShow=true
    this.router.navigate([`/userhome/edit-user/${this.user_id}`])
    this.loaderShow=false
  }


  logout() {
    this.loaderShow=true
    localStorage.clear()
    this.loaderShow=false
    this.router.navigate([""]);
  }
  
}
