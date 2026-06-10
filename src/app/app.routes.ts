import { Routes } from '@angular/router';
import { HomeComponent } from './components/angular-tutorial/home/home';
import { DetailsComponent } from './components/angular-tutorial/details/details';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page';
import { FormPageComponent } from './components/user-form/form-page/form-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserTileComponent } from './components/user-form/user-tile/user-tile.component';


const name = "Noah Miles";
export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'Noah Miles'
  },
  {
    path: 'angular',
    component: HomeComponent,
    title: `${name} - Home`
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: `${name} - Details`
  },
  {
    path: 'about',
    component: AboutComponent,
    title: `${name} - About`
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: `${name} - Contact`
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: `${name} - Projects`
  },
  {
    path: 'form',
    component: FormPageComponent,
    title: `${name} - User Form`
  },
  {
    path: 'user/:id',
    component: UserTileComponent,
    title: `${name} - Details`
  },
];
