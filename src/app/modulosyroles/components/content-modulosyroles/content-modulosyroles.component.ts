import { Component, OnInit } from '@angular/core';
import { ModulosyrolesInterface } from '../../interfaces/modulosyroles.interface';
import { ModulosyrolesService } from '../../services/modulosyroles.service';

@Component({
  selector: 'app-content-modulosyroles',
  standalone: true,
  imports: [],
  templateUrl: './content-modulosyroles.component.html',
  styleUrl: './content-modulosyroles.component.scss'
})
export class ContentModulosyrolesComponent implements OnInit {

  modulosyroles: ModulosyrolesInterface[] = [];

  constructor(private modulosyrolesService: ModulosyrolesService) { }

  ngOnInit(): void {
    this.modulosyrolesService.getModulos().subscribe(
      (response) => {
        this.modulosyroles = response; // Asigna la respuesta al arreglo
        console.log('Módulos y roles:', this.modulosyroles);
      },
      (error) => {
        console.error('Error al obtener módulos y roles:', error);
      }
    );
  }

}
