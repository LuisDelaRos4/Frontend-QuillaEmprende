import { Injectable } from '@angular/core';
import { Environment } from '../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentasInterface } from '../interfaces/ventas.interface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private BASE_URL = Environment.BASE_URL;

  constructor(private http: HttpClient) { }

  // getAbonos(): Observable<AbonosInterface[]> {
  //   return this.http.get<AbonosInterface[]>(`${this.BASE_URL}/get_abonos`);
  // }
  getVentas(): Observable<VentasInterface[]> {
    return this.http.get<VentasInterface[]>(`${this.BASE_URL}/get_ventas`);
  }
}
