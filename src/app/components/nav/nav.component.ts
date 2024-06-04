import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocialComponent } from '../social/social.component';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    SocialComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navigation!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.navigation = this.configService.getPageByName("navigation");
    console.log(this.navigation);
  }
  // navigation = {
  //   title: "nav",
  //   navBlocks: [
  //     {
  //       name: "Home",
  //       routerLink: "/home"
  //     },
  //     {
  //       name: "About",
  //       routerLink: "/about"
  //     },
  //     {
  //       name: "Gallery",
  //       routerLink: "/gallery"
  //     },
  //     {
  //       name: "Services",
  //       routerLink: "/services"
  //     },
  //     {
  //       name: "Testimonials",
  //       routerLink: "/testimonials"
  //     },
  //     {
  //       name: "Clients",
  //       routerLink: "/clients"
  //     },
  //     {
  //       name: "Pricing",
  //       routerLink: "/pricing"
  //     }
  //   ]
  // };

}
