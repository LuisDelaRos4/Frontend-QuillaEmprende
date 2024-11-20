import { Component, OnInit } from '@angular/core';
import { ModulosxrolInterface } from '../../../interfaces/modulosxrol.interface';
import { ModulosyrolesService } from '../../../services/modulosyroles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-modulosxrol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-modulosxrol.component.html',
  styleUrl: './table-modulosxrol.component.scss'
})
export class TableModulosxrolComponent implements OnInit {

  modulosxrol: ModulosxrolInterface[] = [];

  constructor(private ModulosyrolesService: ModulosyrolesService) { }

  ngOnInit(): void {
    this.loadModulosxrol();
  }

  loadModulosxrol(): void {
    this.ModulosyrolesService.getModulosxrol().subscribe({
      next: (data: ModulosxrolInterface[]) => {
        console.log('Datos recibidos en table-modulosxrol:', data);
        this.modulosxrol = data;
      },
      error: (error) => {
        console.error('Error al obtener módulos por rol en table-modulosxrol:', error);
      }
    });
  }

}
