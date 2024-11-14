import { Component } from '@angular/core';
import { ButtonsAbonosComponent } from "../../components/buttons-abonos/buttons-abonos.component";
import { ContentAbonosComponent } from "../../components/content-abonos/content-abonos.component";

@Component({
  selector: 'app-page-abonos',
  standalone: true,
  imports: [ButtonsAbonosComponent, ContentAbonosComponent],
  templateUrl: './page-abonos.component.html',
  styleUrl: './page-abonos.component.scss'
})
export class PageAbonosComponent {

}
