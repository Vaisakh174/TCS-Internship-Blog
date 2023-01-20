import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';
import { ReadMorePostComponent } from '../read-more-post/read-more-post.component';

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



  getdata() {
    this.api.getallposts().subscribe((resp) => {
      this.viewposts = resp
    })
  }

  edit(_id: any) {
    this.router.navigate([`adminhome/editapost/${_id}`])
  }

  deletes(_id: any) {
    this.api.deletepost(_id).subscribe({
      next: (res) => {
        alert("Post Deleted Successfully")
        this.getdata()

      },
      error: (err) => {
        alert(err.error)
      }
    })
  }




  readmore(_id: any) {
    this.router.navigate([`adminhome/readmorepost/${_id}`])
  }

}
