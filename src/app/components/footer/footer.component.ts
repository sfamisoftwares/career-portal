import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.footer = this.configService.getPageByName("footer");
    console.log(this.footer);
  }
  // footer = {

  //   title: "Made with love by",
  //   url: "https://www.shapingrain.com",
  //   developer: "ShapingRain"

  // };
}
