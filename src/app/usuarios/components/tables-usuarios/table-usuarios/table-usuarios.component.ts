import { Component, OnInit } from '@angular/core';
import { UsuariosInterface } from '../../../interfaces/usuarios.interface';
import { UsuariosService } from '../../../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-usuarios.component.html',
  styleUrl: './table-usuarios.component.scss'
})
export class TableUsuariosComponent implements OnInit {

  usuarios: UsuariosInterface[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data: UsuariosInterface[]) => {
        console.log('Datos recibidos en table-usuarios:', data);
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al obtener usuarios en table-usuarios:', error);
      }
    });
  }
}
