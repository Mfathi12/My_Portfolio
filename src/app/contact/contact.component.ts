import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userForm: any;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.contactService.sendContactForm(this.userForm.value).subscribe(
        response => {
          console.log('Message sent successfully:', response);
          // Handle success (e.g., show a confirmation message)
        },
        error => {
          console.error('Error sending message:', error);
          // Handle error (e.g., show an error message)
        }
      );
    } else {
      console.log('Form is not valid');
      // Handle form validation error
    }
  }
}
