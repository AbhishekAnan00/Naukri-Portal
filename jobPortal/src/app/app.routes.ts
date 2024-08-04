import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';

export const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"jobs",
    component:JobsComponent
  },
  {
    path:"jobDetails/:jobId",
    component:JobDetailsComponent
  },
  {
    path:"jobListing",
    component:JobListingComponent
  },
  {
    path:"myJob",
    component:MyJobsComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"newJob",
    component:CreateNewJobComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];
