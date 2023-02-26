import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url = "";  //for hosting

  //for user auth login
  userLogin(data: any) {
    return this.http.post<any>(`${this.url}/api/user/login`, data);
  }

  //for user registration
  userRegister(data: any) {
    return this.http.post<any>(`${this.url}/api/user/register`, data);
  }

  // otp generation
  generateOtp(data: any) {
    return this.http.post<any>(`${this.url}/api/user/otp`,data);
  }

  // otp verify
  verifyOtp(data: any) {
    return this.http.post<any>(`${this.url}/api/user/verify`,data);
  }
    // forgot password
  forgotPassword(data: any) {
    return this.http.post<any>(`${this.url}/api/user/forgot`,data);
  }
      //update password for forgot password
  updatePassword(data: any) {
    return this.http.put<any>(`${this.url}/api/user/updatePassword`,data);
  }
      // get email for forgot password
  getEmail(_id: any) {
    return this.http.get<any>(`${this.url}/api/user/getEmail/${_id}`);
  }


  //for auth redirect
  isUserLoggedin() {
    return !!localStorage.getItem('user_token')
  }
  isAdminLoggedin() {
    return !!localStorage.getItem('admin_token')
  }
  isRootUserLoggedin() {
    return !!localStorage.getItem('root_token')
  }




  //for user check
  getuser_token() {
    return localStorage.getItem('user_token');
  }
  getuser_name() {
    return localStorage.getItem('user_name');
  }
  getuser_id() {
    return localStorage.getItem('user_id');
  }





  //all user apis
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

  getpostbycategory(data: any) {
    return this.http.get(`${this.url}/api/post/category/${data}`);
  }



  //all category apis
  getallcategories() {
    return this.http.get(`${this.url}/api/category/getall`);
  }



  //all comments apis
  getcommentbyid(_id: any) {
    return this.http.get(`${this.url}/api/comment/getsingle/${_id}`);
  }

  newcomment(data: any) {
    return this.http.post(`${this.url}/api/comment/new`, data);
  }

  deletecomment(_id: any) {
    return this.http.delete(`${this.url}/api/comment/delete/${_id}`);
  }
  updatecomment(data: any, _id: any) {
    return this.http.put(`${this.url}/api/comment/update`, { data, _id });
  }



  //all user apis
  getAuser(_id: any) {
    return this.http.get(`${this.url}/api/users/getsingle/${_id}`);
  }

  updateuser(data: any, _id: any) {
    return this.http.put(`${this.url}/api/users/update/`, { data, _id });
  }



}
