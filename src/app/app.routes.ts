import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'first-aid', loadComponent: () => import('./first-aid/first-aid.page').then(m => m.FirstAidPage) },
  { path: 'disasters', loadComponent: () => import('./disasters/disasters.page').then(m => m.DisastersPage) },
  { path: 'brigade', loadComponent: () => import('./brigade/brigade.page').then(m => m.BrigadePage) },
  // { path: 'contact', loadComponent: () => import('./contact/contact.page').then(m => m.ContactPage) },
  { path: 'trainer', loadComponent: () => import('./trainer/trainer.page').then(m => m.TrainerPage) },
  { path: 'manuals', loadComponent: () => import('./manuals/manuals.page').then(m => m.ManualsPage) },
];
