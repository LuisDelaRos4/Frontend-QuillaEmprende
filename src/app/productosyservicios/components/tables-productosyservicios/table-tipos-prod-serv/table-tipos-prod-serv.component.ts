import { Component, OnInit } from '@angular/core';
import { TiposProdServInterface } from '../../../interfaces/tipos-prod-serv.interface';
import { ProductosyserviciosService } from '../../../services/productosyservicios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-tipos-prod-serv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-tipos-prod-serv.component.html',
  styleUrl: './table-tipos-prod-serv.component.scss'
})
export class TableTiposProdServComponent implements OnInit {

  tipos_prod_serv: TiposProdServInterface[] = [];

  constructor(private productosyserviciosService: ProductosyserviciosService) { }

  ngOnInit(): void {
    this.loadTiposProdServ();
  }

  loadTiposProdServ(): void {
    this.productosyserviciosService.getTiposProdServ().subscribe({
      next: (data: TiposProdServInterface[]) => {
        console.log('Datos recibidos en table-tipos-prod-serv:', data);
        this.tipos_prod_serv = data;
      },
      error: (error) => {
        console.error('Error al obtener tipos de productos y servicios en table-tipos-prod-serv:', error);
      }
    });
  }

}
