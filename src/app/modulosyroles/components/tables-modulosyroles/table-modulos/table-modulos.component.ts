import { Component, Input } from '@angular/core';
import { ModulosyrolesInterface } from '../../../interfaces/modulosyroles.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-modulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-modulos.component.html',
  styleUrl: './table-modulos.component.scss'
})
export class TableModulosComponent {

  @Input() public modulosyroles: ModulosyrolesInterface[] = [];

}
