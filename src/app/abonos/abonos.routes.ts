import { Routes } from "@angular/router";
import { PageAbonosComponent } from "./pages/page-abonos/page-abonos.component";
import { TableAbonosComponent } from "./components/tables-abonos/table-abonos/table-abonos.component";

export const ABONOS_ROUTES: Routes = [
  {
    path: "",
    component: PageAbonosComponent,
    children: [
      { path: "", redirectTo: "lista", pathMatch: "full" },
      { path: "lista", component: TableAbonosComponent },
    ]
  }
];
