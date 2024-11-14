import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { PageModulosyrolesComponent } from '../../modulosyroles/pages/page-modulosyroles/page-modulosyroles.component';
import { PageProductosyserviciosComponent } from "../../productosyservicios/pages/page-productosyservicios/page-productosyservicios.component";

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PageModulosyrolesComponent, PageProductosyserviciosComponent],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.scss'
})
export class PageMainComponent {

}
