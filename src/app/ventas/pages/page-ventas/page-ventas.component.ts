import { Component } from '@angular/core';
import { ButtonsVentasComponent } from "../../components/buttons-ventas/buttons-ventas.component";
import { ContentVentasComponent } from "../../components/content-ventas/content-ventas.component";

@Component({
  selector: 'app-page-ventas',
  standalone: true,
  imports: [ButtonsVentasComponent, ContentVentasComponent],
  templateUrl: './page-ventas.component.html',
  styleUrl: './page-ventas.component.scss'
})
export class PageVentasComponent {

}
