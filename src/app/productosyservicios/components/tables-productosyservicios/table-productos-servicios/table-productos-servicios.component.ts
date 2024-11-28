import { Component, OnInit } from '@angular/core';
import { ProductosServiciosInterface } from '../../../interfaces/productos-servicios.interface';
import { ProductosyserviciosService } from '../../../services/productosyservicios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-productos-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-productos-servicios.component.html',
  styleUrl: './table-productos-servicios.component.scss'
})
export class TableProductosServiciosComponent implements OnInit {

  productos_servicios: ProductosServiciosInterface[] = [];

  constructor(private productosyserviciosService: ProductosyserviciosService) { }

  ngOnInit(): void {
    this.loadProductosServicios();
  }

  loadProductosServicios(): void {
    this.productosyserviciosService.getProductosServicios().subscribe({
      next: (data: ProductosServiciosInterface[]) => {
        console.log('Datos recibidos en table-productos-servicios:', data);
        this.productos_servicios = data;
      },
      error: (error) => {
        console.error('Error al obtener productos y servicios en table-productos-servicios:', error);
      }
    });
  }
}
