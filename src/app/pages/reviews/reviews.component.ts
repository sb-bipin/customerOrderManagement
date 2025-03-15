import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/reusable/footer/footer.component";

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, FooterComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Alice Johnson',
      date: new Date('2025-03-01'),
      feedback: 'Amazing experience! The room was spotless, the staff were incredibly helpful, and the amenities were top-notch.',
      rating: 5
    },
    {
      name: 'David Smith',
      date: new Date('2025-02-15'),
      feedback: 'Loved the location! Great value for money and exceptional customer service.',
      rating: 4
    },
    {
      name: 'Sophia Davis',
      date: new Date('2025-01-10'),
      feedback: 'A wonderful stay. The food was delicious, and the spa treatment was the best I’ve had.',
      rating: 5
    },
    {
      name: 'John Doe',
      date: new Date('2025-01-10'),
      feedback: 'A wonderful stay. The food was delicious, and the spa treatment was the best I’ve had.',
      rating: 5
    },
    {
      name: 'John Doe',
      date: new Date('2025-01-10'),
      feedback: 'A wonderful stay. The food was delicious, and the spa treatment was the best I’ve had.',
      rating: 4.5
    },
    {
      name: 'John Doe',
      date: new Date('2025-01-10'),
      feedback: 'A wonderful stay. The food was delicious, and the spa treatment was the best I’ve had.',
      rating: 6
    },
    {
      name: 'John Doe',
      date: new Date('2025-01-10'),
      feedback: 'A wonderful stay. The food was delicious, and the spa treatment was the best I’ve had.',
      rating: 3
    }
  ];

  stars = new Array(5);
}
