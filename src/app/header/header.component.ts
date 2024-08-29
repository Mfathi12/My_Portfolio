import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public router:Router){}

  OnAbout(){
    this.router.navigate(['about'])
  }

  OnHome(){
    this.router.navigate(['home'])
  }

  OnSkills(){
    this.router.navigate(['skills'])
  }

  OnContact(){
    this.router.navigate(['contact'])
  }

  onLogin(){
    this.router.navigate(['login'])
  }
}
