import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'login' , component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path: 'skills',component:SkillsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-project',component:AddProjectComponent},
  {path:'add-skill',component:AddSkillsComponent},
  {path:'edit-Project/:id',component:EditProjectComponent},
  {path:'edit-Skill/:id',component:EditSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
