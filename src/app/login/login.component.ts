import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username="";
  password="";
  errormsg="";

  constructor(private auth:AuthService , private router:Router){}
  login(username:any,password:any){
    //let userData=data.value;
    this.auth.login(username,password).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['dashboard'])
  },(err)=>console.log(err)
) 
}
/* 
  login(){
    if(this.username.trim()===""){
      this.errormsg="Please enter username";
    }else if(this.password.trim()===""){
      this.errormsg="Please enter password";
    }else{
      this.errormsg="";
      let res=this.auth.login(this.username,this.password);
    /if(res===200){
        this.router.navigate(['/home']);
      }else{
        this.errormsg="Invalid username or password";
      } 
    }
    this.router.navigate(['dashboard'])

  }  */
}

