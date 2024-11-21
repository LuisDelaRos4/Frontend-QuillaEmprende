import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableTiposProdServComponent } from "../tables-productosyservicios/table-tipos-prod-serv/table-tipos-prod-serv.component";
import { TableProductosServiciosComponent } from "../tables-productosyservicios/table-productos-servicios/table-productos-servicios.component";
import { TableCategoriasProdServComponent } from "../tables-productosyservicios/table-categorias-prod-serv/table-categorias-prod-serv.component";

@Component({
  selector: 'app-content-productosyservicios',
  standalone: true,
  imports: [RouterOutlet, TableTiposProdServComponent, TableProductosServiciosComponent, TableCategoriasProdServComponent],
  templateUrl: './content-productosyservicios.component.html',
  styleUrl: './content-productosyservicios.component.scss'
})
export class ContentProductosyserviciosComponent {

}

