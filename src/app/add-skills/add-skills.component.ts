import { Component } from '@angular/core';
import { AddSkillsService } from '../services/add-skills.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  title: string = '';
  description: string = '';
  image: File | null = null;

  constructor(private addSkillsService: AddSkillsService) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.image = fileInput.files[0];
    }
  }

  onSubmit(): void {
    if (!this.title || !this.description || !this.image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    this.addSkillsService.addSkill(this.title, this.description, this.image)
      .subscribe(
        (response) => {
          console.log('Skill added successfully:', response);
          // Optionally reset form fields here
          this.title = '';
          this.description = '';
          this.image = null;
        },
        (error) => {
          console.error('Error adding skill:', error);
          if (error.message.includes('net::ERR_UPLOAD_FILE_CHANGED')) {
            alert('File upload failed because the file changed during the upload. Please reselect the file and try again.');
          }
        }
      );
  }
}
