import { Routes } from '@angular/router';
import {IgHomeComponent} from './invoice-generator/ig-home/ig-home.component';
import {IgTemplatesComponent} from './invoice-generator/ig-templates/ig-templates.component';
import {IgGetStartedComponent} from './invoice-generator/ig-get-started/ig-get-started.component';

export const routes: Routes = [
  { path: '', redirectTo: '/invoice-generator', pathMatch: 'full' },
  { path: 'invoice-generator', loadComponent: () => IgHomeComponent, children: [
      { path: '', loadComponent: () => IgGetStartedComponent},
      { path: 'templates', loadComponent: () => IgTemplatesComponent},
  ]},
  { path: '*', redirectTo: '/' },
];
