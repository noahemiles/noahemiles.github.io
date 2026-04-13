import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { OpenGymComponent } from './open-gym/open-gym.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
  {
    path: 'angular',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: 'Projects'
  },
  {
    path: 'open-gym',
    component: OpenGymComponent,
    title: 'Open Gym'
  },
  {
    path: 'open-gym/privacy',
    component: PrivacyComponent,
    title: 'Privacy'
  },
  {
    path: 'open-gym/terms',
    component: TermsComponent,
    title: 'Terms'
  }
];
