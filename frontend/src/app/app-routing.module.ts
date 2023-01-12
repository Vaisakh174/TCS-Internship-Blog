import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FirstContentComponent } from './home/first-content/first-content.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RootLoginComponent } from './root-user/root-login/root-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [

  {
    path: '', component: NavbarComponent,
    children: [
      { path: '', component: FirstContentComponent },
      { path: 'admin', component: AdminLoginComponent },
      { path: 'user', component: UserLoginComponent },
      { path: 'register', component: UserRegistrationComponent },
      { path: 'rootuser', component: RootLoginComponent }
    ]
  },



  {
    path: 'userhome',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'rootuserhome',
    loadChildren: () => import('./root-user/root-user.module').then(m => m.RootUserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
