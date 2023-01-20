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

  
  _id :any
  post: any={
    title:'',
    category:'',
    user_name:'',
    Date:'',
    content:''
  }
  
  getdata() {
    this.api.getbyidpost(this._id).subscribe((res) => {
      this.post = res
      // console.log(this.post)
    })
  }


}
