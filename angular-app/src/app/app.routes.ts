import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes),
  },
  {
    path: 'item/:id',
    loadComponent: () => import('./item/item.page').then(m => m.ItemPage),
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
]
