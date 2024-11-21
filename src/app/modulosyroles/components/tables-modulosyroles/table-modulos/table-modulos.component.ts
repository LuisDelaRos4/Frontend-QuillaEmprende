import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosInterface } from '../../../interfaces/modulos.interface';
import { ModulosyrolesService } from '../../../services/modulosyroles.service';

@Component({
  selector: 'app-table-modulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-modulos.component.html',
  styleUrl: './table-modulos.component.scss'
})
export class TableModulosComponent implements OnInit {

  modulos: ModulosInterface[] = [];

  constructor(private modulosyrolesService: ModulosyrolesService) { }

  ngOnInit(): void {
    this.loadModulos();
  }

  loadModulos(): void {
    this.modulosyrolesService.getModulos().subscribe({
      next: (data: ModulosInterface[]) => {
        console.log('Datos recibidos en table-modulos:', data);
        this.modulos = data;
      },
      error: (error) => {
        console.error('Error al obtener módulos en table-modulos:', error);
      }
    });
  }

}
