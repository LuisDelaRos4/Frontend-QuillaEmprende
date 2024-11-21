import { Component, OnInit } from '@angular/core';
import { TiposDocumentosInterface } from '../../../interfaces/tipos-documentos.interface';
import { UsuariosService } from '../../../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-tipos-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-tipos-documentos.component.html',
  styleUrl: './table-tipos-documentos.component.scss'
})
export class TableTiposDocumentosComponent implements OnInit {

  tipos_documentos: TiposDocumentosInterface[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.loadTiposDocumentos();
  }

  loadTiposDocumentos(): void {
    this.usuariosService.getTiposDocumentos().subscribe({
      next: (data: TiposDocumentosInterface[]) => {
        console.log('Datos recibidos en table-tipos-documentos:', data);
        this.tipos_documentos = data;
      },
      error: (error) => {
        console.error('Error al obtener tipos de documentos en table-tipos-documentos:', error);
      }
    });
  }
}
