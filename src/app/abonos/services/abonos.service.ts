import { Injectable } from '@angular/core';
import { Environment } from '../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbonosInterface } from '../interfaces/abonos.interface';

@Injectable({
  providedIn: 'root'
})
export class AbonosService {

  private BASE_URL = Environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getAbonos(): Observable<AbonosInterface[]> {
    return this.http.get<AbonosInterface[]>(`${this.BASE_URL}/get_abonos`);
  }
}
