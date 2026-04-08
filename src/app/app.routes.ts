import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

export const routes: Routes = [
  {
    path: 'angular',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details - {{housingLocation?.name}}'
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
