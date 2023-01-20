import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PostABlogComponent } from './post-a-blog/post-a-blog.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';


const routes: Routes = [

  {
    path: '', component: UserHomeComponent,
    children: [
      { path: '', component: ViewBlogsComponent },
      { path: 'view-blogs', component: ViewBlogsComponent },
      { path: 'view-categories', component: ViewCategoriesComponent },
      { path: 'edit-user/:_id', component: EditUserComponent },
      { path: 'post-a-blog', component: PostABlogComponent },
      { path: 'edit-post/:_id', component: EditPostComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
