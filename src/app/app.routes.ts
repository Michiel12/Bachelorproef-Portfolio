import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverMijComponent } from './over-mij/over-mij.component';
import { StageComponent } from './stage/stage.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { AngularChallengeComponent } from './angular-challenge/angular-challenge.component';
import { Project40Component } from './project-4-0/project-4-0.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'over-mij', component: OverMijComponent },
    { path: 'stage', component: StageComponent },
    { path: 'projecten', component: ProjectenComponent },
    { path: 'angular-challenge', component: AngularChallengeComponent },
    { path: 'project4.0', component: Project40Component },
];