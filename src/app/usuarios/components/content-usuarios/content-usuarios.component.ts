import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableUsuariosComponent } from "../tables-usuarios/table-usuarios/table-usuarios.component";

@Component({
  selector: 'app-content-usuarios',
  standalone: true,
  imports: [RouterOutlet, TableUsuariosComponent],
  templateUrl: './content-usuarios.component.html',
  styleUrl: './content-usuarios.component.scss'
})
export class ContentUsuariosComponent {

}
