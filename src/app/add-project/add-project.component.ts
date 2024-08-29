import { Component } from '@angular/core';
import { AddProjectService } from '../services/add-project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  title: string = '';
  description: string = '';
  image: File | null = null;

  constructor(private addProjectService: AddProjectService) {}

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

    this.addProjectService.addProject(this.title, this.description, this.image)
      .subscribe(response => {
        console.log('Project added successfully:', response);
        // Optionally reset form fields here
        this.title = '';
        this.description = '';
        this.image = null;
      }, error => {
        console.error('Error adding project:', error);
      });
  }

}
