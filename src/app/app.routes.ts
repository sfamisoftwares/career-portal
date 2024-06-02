import { Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


export const routes: Routes = [

    { title: "Sfami Softwares | Home", path: '', component: HeaderComponent },
    { title: "Sfami Softwares | Home", path: 'home', component: HeaderComponent },
    { title: "Sfami Softwares | About", path: 'about', component: AboutComponent },
    { title: "Sfami Softwares | Services", path: 'services', component: ServicesComponent },
    { title: "Sfami Softwares | Clients", path: 'clients', component: ClientsComponent },
    { title: "Sfami Softwares | Pricing", path: 'pricing', component: PricingComponent },
    { title: "Sfami Softwares | Testimonials", path: 'testimonials', component: TestimonialsComponent },
    { title: "Sfami Softwares | Gallery", path: 'gallery', component: GalleryComponent },
    { title: "Sfami Softwares | Not Found", path: '**', component: NotfoundComponent }

];
