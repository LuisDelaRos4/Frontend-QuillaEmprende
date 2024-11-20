import { Injectable } from '@angular/core';
import { Environment } from '../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ModulosyrolesInterface } from '../interfaces/modulosyroles.interface';

@Injectable({
  providedIn: 'root'
})
export class ModulosyrolesService {

  private BASE_URL = Environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getModulos(): Observable<ModulosyrolesInterface[]> {
    return this.http.get<ModulosyrolesInterface[]>(`${this.BASE_URL}/get_modulos`);
  }


}
