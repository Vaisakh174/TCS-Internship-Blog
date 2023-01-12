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
    return !!localStorage.getItem('user-token')
  }

  getToken() {
    return localStorage.getItem('user-token');
  }





  //all user apis
  getallapprove() {
    return this.http.get(`${this.url}/api/approve/getall`);
  }

  postApprd(data: any) {
    return this.http.post(`${this.url}/api/approve/posted`, data);
  }

  deletesAppr(_id: any) {
    return this.http.delete(`${this.url}/api/approve/delete/${_id}`);
  }

  getbyidappr(_id: any) {
    return this.http.get(`${this.url}/api/approve/getsingle/${_id}`);
  }

  updateappr(data: any, _id: any) {
    return this.http.put(`${this.url}/api/approve/update`, { data, _id });
  }

}
