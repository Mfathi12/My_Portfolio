import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){}
   login(email: string, password: string) :Observable<any> {

    return this.http.post('http://localhost:3000/Admin/login', {email, password})

  }





 /*  constructor(private router:Router){ }
  login(Uname:string,Pword:string){
    if(Uname==="mariam" && Pword==="14112003"){
      return 200;
    }else{
      return 403;
    }
  }  */
}
