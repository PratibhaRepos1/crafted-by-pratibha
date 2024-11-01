import { Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'resume', component: ResumeComponent},
    { path: 'project', component: ProjectComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', component: HomeComponent}
];

