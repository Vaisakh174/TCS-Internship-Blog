import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootUserApiService } from '../root-user-api.service';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.scss']
})
export class ManageAdminsComponent {
  constructor(public api: RootUserApiService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.getdata()
  }
  viewAdmins: any
  post: any
  loaderShow:any


  getdata() {this.loaderShow=true
    this.api.getalladmins().subscribe((res) => {
      this.viewAdmins = res
      this.loaderShow=false
    })
  }

  edit(_id: any) {
    this.loaderShow=true
    this.router.navigate([`/rootuserhome/edit-admin/${_id}`])
    this.loaderShow=false
  }

  deletes(_id: any) {
    this.loaderShow=true
    this.api.deleteadmin(_id).subscribe({
      next: (res) => {
        this.loaderShow=false
        alert("Admin Deleted Successfully")
        this.getdata()

      },
      error: (err) => {
        this.loaderShow=false
        alert(err.error)
      }
    })

   
}
readmore(_id:any){
  this.router.navigate([`/rootuserhome/read-admin-category-posts/${_id}`])
}
}