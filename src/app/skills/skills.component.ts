import { Component,OnInit } from '@angular/core';
import { DisplaySkillsService } from '../services/display-skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  constructor(private DisplaySkillsService: DisplaySkillsService) {}  // Variable name corrected

  ngOnInit(): void {
    this.DisplaySkillsService.getSkills().subscribe(
      (data :any)=> {
        console.log(data);
        this.skills = data.results;
      },
      error => {
        console.error('Error fetching skills:', error);  // Error handling
      }
    );
  }

}
