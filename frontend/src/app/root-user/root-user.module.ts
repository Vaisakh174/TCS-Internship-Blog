import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootUserRoutingModule } from './root-user-routing.module';
import { RootLoginComponent } from './root-login/root-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RootUserHomeComponent } from './root-user-home/root-user-home.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ReadUserPostsComponent } from './read-user-posts/read-user-posts.component';
import { AddAdminComponent } from './add-admin/add-admin.component';


@NgModule({
  declarations: [
  
    RootLoginComponent,
       RootUserHomeComponent,
       ManageAdminsComponent,
       ManageUsersComponent,
       EditUserComponent,
       EditAdminComponent,
       ReadUserPostsComponent,
       AddAdminComponent
  ],
  imports: [
    CommonModule,
    RootUserRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule
  ]
})
export class RootUserModule { }
