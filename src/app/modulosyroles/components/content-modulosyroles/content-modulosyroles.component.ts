import { Component, OnInit } from '@angular/core';
import { ModulosyrolesInterface } from '../../interfaces/modulosyroles.interface';
import { ModulosyrolesService } from '../../services/modulosyroles.service';
import { TableModulosComponent } from "../tables-modulosyroles/table-modulos/table-modulos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-modulosyroles',
  standalone: true,
  imports: [CommonModule, TableModulosComponent],
  templateUrl: './content-modulosyroles.component.html',
  styleUrl: './content-modulosyroles.component.scss'
})
export class ContentModulosyrolesComponent implements OnInit {

  modulosyroles: ModulosyrolesInterface[] = [];

  constructor(private modulosyrolesService: ModulosyrolesService) { }

  ngOnInit(): void {
    this.modulosyrolesService.getModulos().subscribe({
      next: (data: ModulosyrolesInterface[]) => {
        console.log('Datos recibidos:', data);
        this.modulosyroles = data;
      },
      error: (error) => {
        console.error('Error al obtener módulos:', error);
      }
    });
  }

}
