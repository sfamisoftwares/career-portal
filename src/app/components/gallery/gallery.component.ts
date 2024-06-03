import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery = {
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

  };
}
