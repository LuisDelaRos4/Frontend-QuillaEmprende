
import { Routes } from '@angular/router';
import { PageMainComponent } from '../pages/page-main/page-main.component';
import { PageModulosyrolesComponent } from './pages/page-modulosyroles/page-modulosyroles.component';
import { TableModulosxrolComponent } from './components/tables-modulosyroles/table-modulosxrol/table-modulosxrol.component';
import { TableModulosComponent } from './components/tables-modulosyroles/table-modulos/table-modulos.component';
import { TableRolesComponent } from './components/tables-modulosyroles/table-roles/table-roles.component';

export const MODULOSYROLES_ROUTES: Routes = [
  {
    path: '',
    component: PageModulosyrolesComponent,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: TableModulosxrolComponent },
      { path: 'modulos', component: TableModulosComponent },
      { path: 'roles', component: TableRolesComponent }
    ]
  }
];
