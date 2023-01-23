import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ReadUserPostsComponent } from './read-user-posts/read-user-posts.component';
import { RootUserHomeComponent } from './root-user-home/root-user-home.component';

const routes: Routes = [

  {
    path: '', component: RootUserHomeComponent,
    children: [
      { path: '', component: ManageAdminsComponent },
      { path: 'manage_admins', component: ManageAdminsComponent },
      { path: 'manage_users', component: ManageUsersComponent },
      { path: 'edit_user/:_id', component: EditUserComponent },
      { path: 'edit-admin/:_id', component: EditAdminComponent },
      { path: 'add-admin', component: AddAdminComponent },
      { path: 'read-user-posts/:_id', component: ReadUserPostsComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootUserRoutingModule { }
