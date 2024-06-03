import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = {
    title: "FEEDBACK",
    description: "What our customers are saying",
    detail: "",
    feedbacks: [
      {
        "id": 1,
        "image": "/assets/images/user-images/user-1.jpg",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "author": "John Doe - Happy Customer"
      },
      {
        "id": 2,

        "image": "/assets/images/user-images/user-2.jpg",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "author": "Roslyn Doe - Happy Customer"
      },
      {
        "id": 3,
        "image": "/assets/images/user-images/user-3.jpg",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "author": "Thomas Doe - Happy Customer"
      }
    ]

  };
}
