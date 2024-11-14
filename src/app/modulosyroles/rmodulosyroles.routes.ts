
import { Routes } from '@angular/router';
import { PageMainComponent } from '../pages/page-main/page-main.component';
import { PageModulosyrolesComponent } from './pages/page-modulosyroles/page-modulosyroles.component';

export const ROUTES_MODULOSYROLES: Routes = [
  {
    path: '',
    component: PageMainComponent,
    children: [
      {
        path: 'modulosyroles',
        component: PageModulosyrolesComponent
      }
    ]
  }
];
