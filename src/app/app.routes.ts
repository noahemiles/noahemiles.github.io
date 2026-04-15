import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio/projects/angular-tutorial/home/home.component';
import { DetailsComponent } from './portfolio/projects/angular-tutorial/details/details.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ProjectsPageComponent } from './portfolio/projects/projects-page/projects-page.component';
import { OpenGymLandingPageComponent } from './open-gym/open-gym-landing-page/open-gym-landing-page.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ColorDemoComponent } from './color-demo/color-demo.component';

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
    component: OpenGymLandingPageComponent,
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
  },
  {
    path: 'color',
    component: ColorDemoComponent,
    title: 'Color Demo'
  }
];
