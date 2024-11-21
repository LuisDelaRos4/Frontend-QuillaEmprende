import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableUsuariosComponent } from "../tables-usuarios/table-usuarios/table-usuarios.component";
import { TableGenerosComponent } from "../tables-usuarios/table-generos/table-generos.component";
import { TableTiposDocumentosComponent } from "../tables-usuarios/table-tipos-documentos/table-tipos-documentos.component";

@Component({
  selector: 'app-content-usuarios',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './content-usuarios.component.html',
  styleUrl: './content-usuarios.component.scss'
})
export class ContentUsuariosComponent {

}
