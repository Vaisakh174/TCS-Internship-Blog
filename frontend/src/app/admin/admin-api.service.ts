import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url = "";  //for hosting

  //for admin auth service
  adminLogin(data: any) {
    return this.http.post<any>(`${this.url}/api/admin/login`, data);
  }


  isLoggedin() {
    return !!localStorage.getItem('admin_token')
  }

  getToken() {
    return localStorage.getItem('admin_token');
  } 
   getadminname() {
    return localStorage.getItem('admin_name');
  }  
   getadminid() {
    return localStorage.getItem('admin_id');
  }



  //all post crud apis
  getallposts() {
    return this.http.get(`${this.url}/api/post/getall`);
  }

  newpost(data: any) {
    return this.http.post(`${this.url}/api/post/new`, data);
  }

  deletepost(_id: any) {
    return this.http.delete(`${this.url}/api/post/delete/${_id}`);
  }

  getbyidpost(_id: any) {
    return this.http.get(`${this.url}/api/post/getsingle/${_id}`);
  }

  updatepost(data: any, _id: any) {
    return this.http.put(`${this.url}/api/post/update`, { data, _id });
  }



  //all category apis
  getallcategories() {
    return this.http.get(`${this.url}/api/category/getall`);
  } 
  newcategory(data: any) {
    return this.http.post(`${this.url}/api/category/new`, data);
  }

}
