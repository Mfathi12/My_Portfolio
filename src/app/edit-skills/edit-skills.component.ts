import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplaySkillsService } from '../services/display-skills.service';


@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrl: './edit-skills.component.css'
})
export class EditSkillsComponent {
  title: string = '';
description: string = '';
  image: File | null = null;
  id: string | null = null;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private   DisplaySkillsService:DisplaySkillsService,
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
      formData.append('skillImage', this.image);
     }

    this.DisplaySkillsService.editSkill(this.id, formData)
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
