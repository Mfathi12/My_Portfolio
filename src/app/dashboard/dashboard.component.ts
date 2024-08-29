import { Component, OnInit } from '@angular/core';
import { DisplayProjectsService } from '../services/display-projects.service';
import { Router } from '@angular/router';
import { DisplaySkillsService } from '../services/display-skills.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects: any[] = []; // Define the projects array
  skills: any[] = [];

  constructor(
    private displayProjects: DisplayProjectsService,
    private displaySkills: DisplaySkillsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.fetchProjects();
    this.fetchSkills();
  }

  fetchProjects(): void {
    this.displayProjects.getProjects().subscribe(
      (data: any) => {
        console.log(data);
        this.projects = data.results;
      },
      (error: any) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  fetchSkills(): void {
    this.displaySkills.getSkills().subscribe(
      (data: any) => {
        this.skills = data.results;
      },
      (error: any) => {
        console.error('Error fetching skills:', error);
      }
    );
  }

  deleteProject(id: any): void {
    this.displayProjects.deleteProject(id).subscribe(
      (response) => {
        console.log('Project deleted successfully:', response);
        this.fetchProjects(); // Refresh the project list after deletion
      },
      (error: any) => {
        console.error('Error deleting project:', error);
      }
    );
  }

  deleteSkill(id: any): void {
    this.displaySkills.deleteSkill(id).subscribe(
      (response) => {
        console.log('Skill deleted successfully:', response);
        this.fetchSkills(); // Refresh the skills list after deletion
      },
      (error: any) => {
        console.error('Error deleting skill:', error);
      }
    );
  }

  addProject(): void {
    this.router.navigate(['add-project']);
  }

  addSkills(): void {
    this.router.navigate(['add-skill']);
  }

  editProject(id: any) {
    this.router.navigate([`edit-Project/${id}`]);
  }

  editSkill(id: any) {
    this.router.navigate([`edit-Skill/${id}`]);
  }
}
