import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configuration: ConfigItem[] = [

    {
      id: 1,
      name: "header",
      data: {
        title: "A FREE AND SIMPLE LANDING PAGE",
        description: "Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!",
        url: "#",
        buttontext: "START CREATING TODAY"
      }
    },
    {
      id: 2,
      name: "about",
      data: {
        title: "SUCCESS",
        description: "How We Help You To Sell Your Product",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        iconBlocks: [

          { id: 1, icon: "fa-html5", title: "HTML5 &amp; CSS3", description: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico" },
          { id: 2, icon: "fa-bolt", title: "Easy to Use", description: "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi" },
          { id: 3, icon: "fa-tablet", title: "Fully Responsive", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum" },
          { id: 4, icon: "fa-rocket", title: "Parallax Effect", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum" }

        ]
      }
    },
    {
      id: 3,
      name: "clients",
      data: {
        title: "TRUST",
        description: "Companies who use our services",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        companyBlocks: [
          { "id": 1, "image": "/assets/images/company-images/company-logo1.png", "name": "Tree" },
          { "id": 2, "image": "/assets/images/company-images/company-logo2.png", "name": "Fingerprint" },
          { "id": 3, "image": "/assets/images/company-images/company-logo3.png", "name": "The Man" },
          { "id": 4, "image": "/assets/images/company-images/company-logo4.png", "name": "Mustache" },
          { "id": 5, "image": "/assets/images/company-images/company-logo5.png", "name": "Goat" },
          { "id": 6, "image": "/assets/images/company-images/company-logo6.png", "name": "Justice" },
          { "id": 7, "image": "/assets/images/company-images/company-logo7.png", "name": "Ball" },
          { "id": 8, "image": "/assets/images/company-images/company-logo8.png", "name": "Cold" },
          { "id": 9, "image": "/assets/images/company-images/company-logo9.png", "name": "Apple" }
        ]
      }
    },
    {
      id: 4,
      name: "gallery",
      data: {
        title: "Gallery",
        description: "Project Images",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        galleryBlocks: [
          {
            "id": 1,
            "url": "/assets/images/gallery-images/gallery-image-1.jpg",
            "name": "Tree"
          },
          {
            "id": 2,
            "url": "/assets/images/gallery-images/gallery-image-2.jpg",
            "name": "Fingerprint"
          },
          {
            "id": 3,
            "url": "/assets/images/gallery-images/gallery-image-3.jpg",
            "name": "The Man"
          },
          {
            "id": 4,
            "url": "/assets/images/gallery-images/gallery-image-4.jpg",
            "name": "Mustache"
          },
          {
            "id": 5,
            "url": "/assets/images/gallery-images/gallery-image-5.jpg",
            "name": "Moose"
          },
          {
            "id": 6,
            "url": "/assets/images/gallery-images/gallery-image-6.jpg",
            "name": "Justice"
          }
        ]

      }
    },
    {
      id: 5,
      name: "services",
      data: {
        title: "BELIEVING",
        description: "Focusing On What Matters Most",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      }
    },
    {
      id: 6,
      name: "testimonials",
      data: {
        title: "FEEDBACK",
        description: "What Our Customers Are Saying",
        detail: "",
        feedbackBlock: [
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

      }
    },
    {
      id: 7,
      name: "pricing",
      data: {
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
      }
    },
    {
      id: 8,
      name: "footer",
      data: {

        title: "Made with love by",
        url: "https://www.shapingrain.com",
        developer: "ShapingRain"

      }
    },
    {
      id: 9,
      name: "social",
      data: {
        title: "socialicons",
        socialBlocks: [

          {
            id: 1,
            title: "Facebook",
            target: "_blank",
            username: "sfami",
            url: "https://www.facebook.com/username",
            icon: "facebook",
          },
          {
            id: 2,
            title: "Google+",
            target: "_blank",
            username: "sfami",
            url: "http://google.com/+username",
            icon: "google-plus",
          },
          {
            id: 3,
            title: "Twitter",
            target: "_blank",
            username: "sfami",
            url: "http://www.twitter.com/username",
            icon: "twitter",
          },
          {
            id: 4,
            title: "Instagram",
            target: "_blank",
            username: "sfami",
            url: "http://www.instagram.com/username",
            icon: "instagram",
          },
          {
            id: 5,
            title: "Behance",
            target: "_blank",
            username: "sfami",
            url: "http://www.behance.net",
            icon: "behance",
          }
        ]
      }

    }
  ]

  constructor() { }

  getAllPages(): ConfigItem[] {
    return this.configuration;
  }
  getPageByName(pageName: string): ConfigItem | undefined {
    return this.configuration.find(configItem => configItem.name == pageName);
  }


}
