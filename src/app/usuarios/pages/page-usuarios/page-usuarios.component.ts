import { Component } from '@angular/core';
import { ButtonsUsuariosComponent } from "../../components/buttons-usuarios/buttons-usuarios.component";
import { ContentUsuariosComponent } from "../../components/content-usuarios/content-usuarios.component";

@Component({
  selector: 'app-page-usuarios',
  standalone: true,
  imports: [ButtonsUsuariosComponent, ContentUsuariosComponent],
  templateUrl: './page-usuarios.component.html',
  styleUrl: './page-usuarios.component.scss'
})
export class PageUsuariosComponent {

}
