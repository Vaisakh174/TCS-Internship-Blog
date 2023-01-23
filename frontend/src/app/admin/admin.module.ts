import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ReadMorePostComponent } from './read-more-post/read-more-post.component';
import { EditAPostComponent } from './edit-a-post/edit-a-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ReadPostByCategoryComponent } from './read-post-by-category/read-post-by-category.component';


@NgModule({
  declarations: [
  
    AdminLoginComponent,
       AdminHomeComponent,
       ManagePostsComponent,
       ManageCategoryComponent,
       ReadMorePostComponent,
       EditAPostComponent,
       CreatePostComponent,
       CreateCategoryComponent,
       ReadPostByCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule
  ]
})
export class AdminModule { }
