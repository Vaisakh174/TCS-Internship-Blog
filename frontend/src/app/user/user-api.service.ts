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


  isLoggedin() {
    return !!localStorage.getItem('user_token')
  }

  getuser_token() {
    return  localStorage.getItem('user_token');
  } 
  getuser_name() {
    return  localStorage.getItem('user_name');
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
  getcommentbyid(_id:any) {
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
 getAuser(_id:any) {
  return this.http.get(`${this.url}/api/user/getsingle/${_id}`);
} 

updateuser(data:any,_id:any) {
  return this.http.put(`${this.url}/api/user/update/`,{data,_id});
}



}
