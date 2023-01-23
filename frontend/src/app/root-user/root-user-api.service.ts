import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootUserApiService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url = "";  //for hosting

  //for root-user auth service
  rootUserLogin(data: any) {
    return this.http.post<any>(`${this.url}/api/rootUser/login`, data);
  }


  isLoggedin() {
    return !!localStorage.getItem('root_token')
  }

  getToken() {
    return localStorage.getItem('root_token');
  }  
  
  getRootUserName() {
    return localStorage.getItem('root_name');
  } 
   getRootUserId() {
    return localStorage.getItem('root_id');
  }



  //all  user apis
  getallUsers() {
    return this.http.get(`${this.url}/api/users/getall`);
  }

  adduser(data: any) {
    return this.http.post(`${this.url}/api/users/new`, data);
  }

  deleteuser(_id: any) {
    return this.http.delete(`${this.url}/api/users/delete/${_id}`);
  }

  getbyiduser(_id: any) {
    return this.http.get(`${this.url}/api/users/getsingle/${_id}`);
  }

  updateuser(data: any, _id: any) {
    return this.http.put(`${this.url}/api/users/update`, { data, _id });
  }
  
  
  
  
  //all admin apis
  getalladmins() {
    return this.http.get(`${this.url}/api/admins/getall`);
  }

  addadmin(data: any) {
    return this.http.post(`${this.url}/api/admins/new`, data);
  }

  deleteadmin(_id: any) {
    return this.http.delete(`${this.url}/api/admins/delete/${_id}`);
  }

  getbyidadmin(_id: any) {
    return this.http.get(`${this.url}/api/admins/getsingle/${_id}`);
  }

  updateadmin(data: any, _id: any) {
    return this.http.put(`${this.url}/api/admins/update`, { data, _id });
  }

  //all post apis
  getallposts() {
    return this.http.get(`${this.url}/api/post/getall`);
  }

  getbyidpost(_id: any) {
    return this.http.get(`${this.url}/api/post/getsingle/${_id}`);
  }
  
  searchpostbyuserId(_id: any) {
    return this.http.get(`${this.url}/api/post/search/${_id}`);
  } 
   approveAsAdmin(_id: any) {
    return this.http.post(`${this.url}/api/admins/approve`,{_id});
  }

}
