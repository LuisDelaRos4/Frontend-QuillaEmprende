import { Routes } from "@angular/router";
import { PageVentasComponent } from './pages/page-ventas/page-ventas.component';
import { TableVentasComponent } from "./components/tables-ventas/table-ventas/table-ventas.component";

export const VENTAS_ROUTES: Routes = [
  {
    path: '',
    component: PageVentasComponent,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: TableVentasComponent }
    ]
  }
];
