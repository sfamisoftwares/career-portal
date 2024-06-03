import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  
  testimonials!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.testimonials = this.configService.getPageByName("testimonials");
    console.log(this.testimonials);
  }

  // testimonials = {
  //   title: "FEEDBACK",
  //   description: "What our customers are saying",
  //   detail: "",
  //   feedbackBlock: [
  //     {
  //       "id": 1,
  //       "image": "/assets/images/user-images/user-1.jpg",
  //       "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //       "author": "John Doe - Happy Customer"
  //     },
  //     {
  //       "id": 2,

  //       "image": "/assets/images/user-images/user-2.jpg",
  //       "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //       "author": "Roslyn Doe - Happy Customer"
  //     },
  //     {
  //       "id": 3,
  //       "image": "/assets/images/user-images/user-3.jpg",
  //       "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //       "author": "Thomas Doe - Happy Customer"
  //     }
  //   ]

  // };
}
