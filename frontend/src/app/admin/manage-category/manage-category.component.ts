import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.scss']
})
export class ManageCategoryComponent {

  constructor(public api: AdminApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getdata()

  }
categories:any
read_cat_close=false

  getdata() {

    
  }
}
