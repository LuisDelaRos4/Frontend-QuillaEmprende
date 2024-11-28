import { Component, OnInit } from '@angular/core';
import { GenerosInterface } from '../../../interfaces/generos.interface';
import { UsuariosService } from '../../../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-generos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-generos.component.html',
  styleUrl: './table-generos.component.scss'
})
export class TableGenerosComponent implements OnInit {

  generos: GenerosInterface[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.loadGeneros();
  }

  loadGeneros(): void {
    this.usuariosService.getGeneros().subscribe({
      next: (data: GenerosInterface[]) => {
        console.log('Datos recibidos en table-generos:', data);
        this.generos = data;
      },
      error: (error) => {
        console.error('Error al obtener géneros en table-generos:', error);
      }
    });
  }
}
