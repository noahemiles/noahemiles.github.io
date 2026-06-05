import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DetailsComponent } from './details/details';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { ProjectsPageComponent } from './projects-page/projects-page';

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
