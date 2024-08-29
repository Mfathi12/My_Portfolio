import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplaySkillsService } from '../services/display-skills.service';
import { DisplayProjectsService } from '../services/display-projects.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  standalone:true,
imports: [FormsModule, CommonModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent implements OnInit {
/* onSubmit() {
  if (!this.title || !this.description ) {
    alert('Please fill in all fields and upload an image.');
    return;}
}
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
title: any;
description: any; */
title: string = '';
description: string = '';
  image: File | null = null;
  id: string | null = null;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private   DisplayProjectsService:DisplayProjectsService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.image = file;
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    if (this.image) {
      formData.append('projectImg', this.image);
     }

    this.DisplayProjectsService.editProject(this.id, formData)
      .subscribe(
        (response) => {
          this.successMessage = 'Skill updated successfully!';
          console.log(response);
        this.title='';
        this.description='';
        this.image=null;

        },
        (err) => console.log(err)
      );
  }

}
