import { Component, OnInit } from '@angular/core';
import { CategoriasProdServInterface } from '../../../interfaces/categorias-prod-serv.interface';
import { ProductosyserviciosService } from '../../../services/productosyservicios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-categorias-prod-serv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-categorias-prod-serv.component.html',
  styleUrl: './table-categorias-prod-serv.component.scss'
})
export class TableCategoriasProdServComponent implements OnInit {

  categorias_prod_serv: CategoriasProdServInterface[] = [];

  constructor(private productosyserviciosService: ProductosyserviciosService) { }

  ngOnInit(): void {
    this.loadCategoriasProdServ();
  }

  loadCategoriasProdServ(): void {
    this.productosyserviciosService.getCategoriasProdServ().subscribe({
      next: (data: CategoriasProdServInterface[]) => {
        console.log('Datos recibidos en table-categorias-prod-serv:', data);
        this.categorias_prod_serv = data;
      },
      error: (error) => {
        console.error('Error al obtener categorías de productos y servicios en table-categorias-prod-serv:', error);
      }
    });
  }
}
