import { Routes } from "@angular/router";
import { PageProductosyserviciosComponent } from "./pages/page-productosyservicios/page-productosyservicios.component";
import { TableProductosServiciosComponent } from "./components/tables-productosyservicios/table-productos-servicios/table-productos-servicios.component";
import { TableTiposProdServComponent } from "./components/tables-productosyservicios/table-tipos-prod-serv/table-tipos-prod-serv.component";
import { TableCategoriasProdServComponent } from "./components/tables-productosyservicios/table-categorias-prod-serv/table-categorias-prod-serv.component";

export const PRODUCTOSYSERVICIOS_ROUTES: Routes = [
  {
    path: '',
    component: PageProductosyserviciosComponent,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: TableProductosServiciosComponent },
      { path: 'tipos', component: TableTiposProdServComponent },
      { path: 'categorias', component: TableCategoriasProdServComponent }
    ]
  }
];
