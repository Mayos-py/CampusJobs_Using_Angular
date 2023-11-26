import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobPostFormComponent } from './job-post-form/job-post-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'job-cards', component: HomeComponent },
    { path: 'job-post-form', component: JobPostFormComponent},
  ];