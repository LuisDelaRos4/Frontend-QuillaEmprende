import { Component } from '@angular/core';
import { ButtonsModulosyrolesComponent } from "../../../modulosyroles/components/buttons-modulosyroles/buttons-modulosyroles.component";
import { ContentModulosyrolesComponent } from "../../../modulosyroles/components/content-modulosyroles/content-modulosyroles.component";
import { ButtonsProductosyserviciosComponent } from "../../components/buttons-productosyservicios/buttons-productosyservicios.component";
import { ContentProductosyserviciosComponent } from "../../components/content-productosyservicios/content-productosyservicios.component";

@Component({
  selector: 'app-page-productosyservicios',
  standalone: true,
  imports: [ButtonsProductosyserviciosComponent, ContentProductosyserviciosComponent],
  templateUrl: './page-productosyservicios.component.html',
  styleUrl: './page-productosyservicios.component.scss'
})
export class PageProductosyserviciosComponent {

}
