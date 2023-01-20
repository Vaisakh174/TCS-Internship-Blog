import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { PostABlogComponent } from './post-a-blog/post-a-blog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent,
    UserHomeComponent,
    ViewBlogsComponent,
    PostABlogComponent,
    EditPostComponent,
    EditUserComponent,
    ViewCategoriesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatProgressSpinnerModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule
   
  ]
})
export class UserModule { }
