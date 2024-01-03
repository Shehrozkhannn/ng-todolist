import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedUser: any;
  url: string = "/assets/data.json";
  baseUrl: string = 'http://restapi.adequateshop.com/api/Tourist';
  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  }
  constructor(private http: HttpClient) { }

  // getUsers(){
  //   return this.http.get(this.url);
  // }

  //GET
  getUsersNew() {
    return this.http.get(this.baseUrl + '?page=1');
  }
  //POST
  createUser(params: any) {
    return this.http.post(this.baseUrl, params, { headers: this.headers });
  }
  //DELETE
  deleteUsers(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`, { headers: this.headers });
  }
  //PUT
  updateUser(id: number, params: any) {
    return this.http.put(this.baseUrl + `/${id}`, params, { headers: this.headers })
  }

}
