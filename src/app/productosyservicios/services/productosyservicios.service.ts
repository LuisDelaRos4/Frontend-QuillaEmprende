import { Injectable } from '@angular/core';
import { Environment } from '../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiposProdServInterface } from '../interfaces/tipos-prod-serv.interface';
import { CategoriasProdServInterface } from '../interfaces/categorias-prod-serv.interface';
import { ProductosServiciosInterface } from '../interfaces/productos-servicios.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosyserviciosService {

  private BASE_URL = Environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getTiposProdServ(): Observable<TiposProdServInterface[]> {
    return this.http.get<TiposProdServInterface[]>(`${this.BASE_URL}/get_tipos_prod_serv`);
  }

  getCategoriasProdServ(): Observable<CategoriasProdServInterface[]> {
    return this.http.get<CategoriasProdServInterface[]>(`${this.BASE_URL}/get_categorias_prod_serv`);
  }

  getProductosServicios(): Observable<ProductosServiciosInterface[]> {
    return this.http.get<ProductosServiciosInterface[]>(`${this.BASE_URL}/get_productos_servicios`);
  }

}
