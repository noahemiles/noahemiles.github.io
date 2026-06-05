import { Routes } from '@angular/router';
import { HomeComponent } from './components/angular-tutorial/home/home';
import { DetailsComponent } from './components/angular-tutorial/details/details';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page';

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
    title: "Contact"
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: "Projects"
  }
];
