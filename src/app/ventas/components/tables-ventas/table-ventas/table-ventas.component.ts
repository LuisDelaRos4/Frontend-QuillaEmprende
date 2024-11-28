import { Component, OnInit } from '@angular/core';
import { VentasInterface } from '../../../interfaces/ventas.interface';
import { VentasService } from '../../../services/ventas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-ventas.component.html',
  styleUrl: './table-ventas.component.scss'
})
export class TableVentasComponent implements OnInit {

  ventas: VentasInterface[] = [];

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.loadVentas();
  }

  loadVentas(): void {
    this.ventasService.getVentas().subscribe({
      next: (data: VentasInterface[]) => {
        console.log('Datos recibidos en table-ventas:', data);
        this.ventas = data;
      },
      error: (error) => {
        console.error('Error al obtener ventas en table-ventas:', error);
      }
    });
  }

}
