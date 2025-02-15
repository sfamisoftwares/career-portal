import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  header!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.header = this.configService.getPageByName("header");
    console.log(this.header);
  }
  // header = {
  //   title: "A FREE AND SIMPLE LANDING PAGE",
  //   description: "Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!",
  //   url: "#",
  //   buttontext: "START CREATING TODAY"
  // };
}
