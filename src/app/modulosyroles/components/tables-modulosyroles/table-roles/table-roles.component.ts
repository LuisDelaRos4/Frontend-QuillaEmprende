import { Component, Input, OnInit } from '@angular/core';
import { RolesInterface } from '../../../interfaces/roles.interface';
import { CommonModule } from '@angular/common';
import { ModulosyrolesService } from '../../../services/modulosyroles.service';

@Component({
  selector: 'app-table-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-roles.component.html',
  styleUrl: './table-roles.component.scss'
})
export class TableRolesComponent implements OnInit {

  roles: RolesInterface[] = [];

  constructor(private ModulosyrolesService: ModulosyrolesService) { }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.ModulosyrolesService.getRoles().subscribe({
      next: (data: RolesInterface[]) => {
        console.log('Datos recibidos en table-roles:', data);
        this.roles = data;
      },
      error: (error) => {
        console.error('Error al obtener roles en table-roles:', error);
      }
    });
  }
}
