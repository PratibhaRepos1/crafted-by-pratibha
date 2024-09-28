import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'resume', component: ResumeComponent},
    { path: '', component: HomeComponent}
];

