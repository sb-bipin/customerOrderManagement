import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../../shared/reusable/footer/footer.component";

@Component({
  selector: 'app-feedback',
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedback = {
    name: '',
    email: '',
    feedback: '',
  };

  rating = 0;
  isSubmitted = false;

  stars = new Array(5);

  setRating(rating: number) {
    this.rating = rating;
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitted = true;
      console.log('Feedback submitted:', this.feedback);
    }
  }
}
