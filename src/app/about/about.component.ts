import { Component, OnInit } from '@angular/core';
import { DisplayProjectsService } from '../services/display-projects.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // Corrected to styleUrls
})
export class AboutComponent implements OnInit {

  projects: any[] = [];

  constructor(private displayProjectsService: DisplayProjectsService) {}  // Variable name corrected

  ngOnInit(): void {
    this.displayProjectsService.getProjects().subscribe(
      (data :any)=> {
        console.log(data);
        this.projects = data.results;
      },
      error => {
        console.error('Error fetching projects:', error);  // Error handling
      }
    );
  }

  goToGithub(): void {
    window.location.href = 'https://github.com/Mfathi12';
  }
}
