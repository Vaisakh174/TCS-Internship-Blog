import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent {
  constructor(public api: AdminApiService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.getdata()
  }
  viewposts: any
  post: any
  loaderShow:any


  getdata() {
    this.loaderShow=true
    this.api.getallposts().subscribe((resp) => {
      this.viewposts = resp
      this.loaderShow=false
    })
  }

  edit(_id: any) {

    this.router.navigate([`adminhome/editapost/${_id}`])
  }

  deletes(_id: any) {
    this.loaderShow=true
    this.api.deletepost(_id).subscribe({
      next: (res) => {
        this.loaderShow=false
        alert("Post Deleted Successfully")
        this.getdata()

      },
      error: (err) => {
        this.loaderShow=false
        alert(err.error)
      }
    })
  }




  readmore(_id: any) {
    this.router.navigate([`adminhome/readmorepost/${_id}`])
  }

}
