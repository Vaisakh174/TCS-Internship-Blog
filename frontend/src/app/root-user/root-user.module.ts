import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootUserRoutingModule } from './root-user-routing.module';
import { RootLoginComponent } from './root-login/root-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RootUserHomeComponent } from './root-user-home/root-user-home.component';


@NgModule({
  declarations: [
  
    RootLoginComponent,
       RootUserHomeComponent
  ],
  imports: [
    CommonModule,
    RootUserRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,HttpClientModule
  ]
})
export class RootUserModule { }
