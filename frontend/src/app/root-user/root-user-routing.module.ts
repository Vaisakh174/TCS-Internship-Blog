import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootUserHomeComponent } from './root-user-home/root-user-home.component';

const routes: Routes = [

  {path:'',component:RootUserHomeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootUserRoutingModule { }
