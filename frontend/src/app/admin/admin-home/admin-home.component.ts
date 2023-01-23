import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  constructor(private router: Router, public api: AdminApiService) { }
  username: any
  ngOnInit(): void {
    this.loaderShow=true
    this.username = this.api.getadminname()
    this.loaderShow=false
  }

  loaderShow:any


  logout() {
    this.loaderShow=true
    localStorage.clear()
    this.router.navigate([""]);
    this.loaderShow=false
  }
}
