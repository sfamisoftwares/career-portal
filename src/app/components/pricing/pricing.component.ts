import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricing = {
    title: "YOUR CHOICE",
    description: "We have the right package for you",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    pricingPlans: [
      {
        id: 1,
        title: "Personal",
        subtitle: "",
        description: "The standard version",
        currency: "",
        price: 19,
        featured: true,
        downloads: "5 Downloads",
        extensions: "2 Extensions",
        tutorials: "Tutorials",
        support: "Forum Support",
        updates: "1 years free updates",
        buttontext: "BUY NOW"
      },
      {
        id: 2,
        title: "Student",
        subtitle: "",
        description: "Most popular choice",
        currency: "",
        price: 29,
        featured: true,
        downloads: "15 Downloads",
        extensions: "5 Extensions",
        tutorials: "Tutorials with Files",
        support: "Forum Support",
        updates: "2 years free updates",
        buttontext: "BUY NOW"
      },
      {
        id: 3,
        title: "Business",
        subtitle: "",
        description: "For the whole team",
        currency: "",
        price: 49,
        featured: true,
        downloads: "Unlimited Downloads",
        extensions: "Unlimited Extensions",
        tutorials: "HD Video Tutorials",
        support: "Chat Support",
        updates: "Lifetime free updates",
        buttontext: "BUY NOW"
      },
    ]
  };
}
