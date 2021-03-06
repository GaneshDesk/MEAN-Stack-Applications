import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from "@angular/common/http";

import {User} from "./user.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser : User = {
    fullName:'',
    email:'',
    password:''
  };

  constructor(private http: HttpClient) {}
  
    postUser (user : User){
      return this.http.post(environment.apiBaseUrl+'/register',user)
    
  }
}

