import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableAbonosComponent } from "../tables-abonos/table-abonos/table-abonos.component";

@Component({
  selector: 'app-content-abonos',
  standalone: true,
  imports: [RouterOutlet, TableAbonosComponent],
  templateUrl: './content-abonos.component.html',
  styleUrl: './content-abonos.component.scss'
})
export class ContentAbonosComponent {

}
