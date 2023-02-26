import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { PostABlogComponent } from './post-a-blog/post-a-blog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserApiService } from './user-api.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent,
    UserHomeComponent,
    ViewBlogsComponent,
    PostABlogComponent,
    EditPostComponent,
    EditUserComponent,
    ViewCategoriesComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatProgressSpinnerModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule
   
  ],   providers: [UserApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService ,
      multi:true
    }]
})
export class UserModule { }
