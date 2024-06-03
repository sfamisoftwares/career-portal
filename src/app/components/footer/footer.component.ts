import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footer = {

    title: "Made with love by",
    url: "https://www.shapingrain.com",
    developer: "ShapingRain"

  };
}
