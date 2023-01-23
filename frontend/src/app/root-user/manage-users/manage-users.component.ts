import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootUserApiService } from '../root-user-api.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {
  constructor(public api: RootUserApiService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.getdata()
  }
  viewusers: any
  post: any
  loaderShow:any


  getdata() {
    this.loaderShow=true
    this.api.getallUsers().subscribe((resp) => {
      this.viewusers = resp
      this.loaderShow=false
    })
  }

  edit(_id: any) {
    this.loaderShow=true
    this.router.navigate([`/rootuserhome/edit_user/${_id}`])
    this.loaderShow=false
  }

  deletes(_id: any) {
    this.loaderShow=true
    this.api.deleteuser(_id).subscribe({
      next: (res) => {
        this.loaderShow=false
        alert("User Deleted Successfully")
        this.getdata()

      },
      error: (err) => {
        this.loaderShow=false
        alert(err.error)
      }
    })
  }

  readmore(_id: any) {
    this.router.navigate([`/rootuserhome/read-user-posts/${_id}`])
  }
  approve(_id: any) {
    this.loaderShow=true
    this.api.approveAsAdmin(_id).subscribe({
      next: (res) => {
        this.loaderShow=false
        alert("Approve Success.Use Same credential For Admin")
      },
      error: (err) => {
        this.loaderShow=false
        alert(`Error...  ${err.error}`);
      }
    })
  }
}
