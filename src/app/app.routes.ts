import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'first-aid',
    loadComponent: () => import('./first-aid/first-aid.page').then( m => m.FirstAidPage)
  },
  {
    path: 'disasters',
    loadComponent: () => import('./disasters/disasters.page').then( m => m.DisastersPage)
  },
];
