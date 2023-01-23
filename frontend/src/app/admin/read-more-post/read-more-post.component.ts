import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-read-more-post',
  templateUrl: './read-more-post.component.html',
  styleUrls: ['./read-more-post.component.scss']
})
export class ReadMorePostComponent {
  constructor(public api: AdminApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['_id']
    this.getdata()
  }

  loaderShow:any
  _id: any
  post: any = {
    title: '',
    category: '',
    user_name: '',
    Date: '',
    content: ''
  }

  getdata() {
    this.loaderShow=true
    this.api.getbyidpost(this._id).subscribe({
      next: (res) => {
        this.post = res
        // console.log(this.post)
        this.loaderShow=false
      },
      error: (err) => {
        this.loaderShow=false
        alert(`Error...  ${err.error}`);
      }
    })
  }


}
