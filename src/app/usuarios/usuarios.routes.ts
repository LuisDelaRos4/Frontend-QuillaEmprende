import { Routes } from "@angular/router";
import { PageUsuariosComponent } from "./pages/page-usuarios/page-usuarios.component";
import { TableUsuariosComponent } from "./components/tables-usuarios/table-usuarios/table-usuarios.component";
import { TableGenerosComponent } from "./components/tables-usuarios/table-generos/table-generos.component";
import { TableTiposDocumentosComponent } from "./components/tables-usuarios/table-tipos-documentos/table-tipos-documentos.component";

export const USUARIOS_ROUTES: Routes = [
  {
    path: '',
    component: PageUsuariosComponent,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: TableUsuariosComponent },
      { path: 'generos', component: TableGenerosComponent },
      { path: 'tipos-documentos', component: TableTiposDocumentosComponent }
    ]
  }
];
