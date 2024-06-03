import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.services = this.configService.getPageByName("services");
    console.log(this.services);
  }

  // services = {
  //   title: "BELIEVING",
  //   description: "Focusing On What Matters Most",
  //   detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
  // };
}
