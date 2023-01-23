import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RootUserApiService } from '../root-user-api.service';

@Component({
  selector: 'app-root-user-home',
  templateUrl: './root-user-home.component.html',
  styleUrls: ['./root-user-home.component.scss']
})
export class RootUserHomeComponent {

  constructor(private router: Router, public api:RootUserApiService) { }

  username: any

  ngOnInit(): void {
    this.username = this.api.getRootUserName()
  }

  loaderShow:any

  logout() {
    this.loaderShow=true
    localStorage.clear()
    this.router.navigate([""]);
    this.loaderShow=false
  }
}
