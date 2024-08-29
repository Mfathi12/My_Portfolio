import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import Angular Material animations
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProjectService } from './services/add-project.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { DisplayProjectsService } from './services/display-projects.service';
import { AddSkillsService } from './services/add-skills.service';
import { DisplaySkillsService } from './services/display-skills.service';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SkillsComponent,
    DashboardComponent,
    AddProjectComponent,
    AddSkillsComponent,
    EditSkillsComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    provideClientHydration(),
    AuthService,
    AddProjectService,
    DisplayProjectsService,
    AddSkillsService,
    DisplaySkillsService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
