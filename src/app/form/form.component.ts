import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  feedbackForm: FormGroup;

  constructor() {
    this.feedbackForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

    // Debugging form states
    console.log('Initial Form State:', this.feedbackForm.value);
    this.feedbackForm.valueChanges.subscribe(value => {
      console.log('Form Changes:', value);
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted:', this.feedbackForm.value);
      alert('Thank you for your feedback!');
      this.feedbackForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
