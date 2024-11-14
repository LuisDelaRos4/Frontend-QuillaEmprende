import { Component } from '@angular/core';
import { ButtonsModulosyrolesComponent } from "../../components/buttons-modulosyroles/buttons-modulosyroles.component";
import { ContentModulosyrolesComponent } from '../../components/content-modulosyroles/content-modulosyroles.component';

@Component({
  selector: 'app-page-modulosyroles',
  standalone: true,
  imports: [ButtonsModulosyrolesComponent, ContentModulosyrolesComponent],
  templateUrl: './page-modulosyroles.component.html',
  styleUrl: './page-modulosyroles.component.scss'
})
export class PageModulosyrolesComponent {

}
