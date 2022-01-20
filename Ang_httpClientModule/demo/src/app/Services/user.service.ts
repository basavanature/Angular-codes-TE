import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//imported

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  //dependency injection of HttpClient
  constructor(private http:HttpClient) { }
}
