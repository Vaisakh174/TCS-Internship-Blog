import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditAPostComponent } from './edit-a-post/edit-a-post.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { ReadMorePostComponent } from './read-more-post/read-more-post.component';
import { ReadPostByCategoryComponent } from './read-post-by-category/read-post-by-category.component';


const routes: Routes = [

  {
    path: '', component: AdminHomeComponent,
    children: [
      { path: '', component: ManagePostsComponent },
      { path: 'manage_posts', component: ManagePostsComponent },
      { path: 'readmorepost/:_id', component: ReadMorePostComponent },
      { path: 'readPostBycategory/:category', component: ReadPostByCategoryComponent },
      { path: 'editapost/:_id', component: EditAPostComponent },
      { path: 'create_post', component: CreatePostComponent },
      { path: 'create_category', component: CreateCategoryComponent },
      { path: "manage_categorys", component: ManageCategoryComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
