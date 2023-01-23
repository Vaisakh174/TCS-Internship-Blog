import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user/user-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public api: UserApiService, private router: Router) { }

  ngOnInit(): void {
    // if (this.api.isUserLoggedin()) {
    //   this.router.navigate(['/userhome'])
    // } else if (this.api.isAdminLoggedin()) {
    //   this.router.navigate(['/adminhome'])
    // } else if (this.api.isRootUserLoggedin()) {
    //   this.router.navigate(['/rootuserhome'])
    // }
  }


}
