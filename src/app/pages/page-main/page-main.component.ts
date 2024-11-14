import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { PageModulosyrolesComponent } from '../../modulosyroles/pages/page-modulosyroles/page-modulosyroles.component';
import { PageProductosyserviciosComponent } from "../../productosyservicios/pages/page-productosyservicios/page-productosyservicios.component";
import { PageUsuariosComponent } from '../../usuarios/pages/page-usuarios/page-usuarios.component';
import { PageVentasComponent } from "../../ventas/pages/page-ventas/page-ventas.component";

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PageModulosyrolesComponent, PageProductosyserviciosComponent, PageUsuariosComponent, PageVentasComponent],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.scss'
})
export class PageMainComponent {

}
