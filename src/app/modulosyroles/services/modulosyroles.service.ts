import { Injectable } from '@angular/core';
import { Environment } from '../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModulosInterface } from '../interfaces/modulos.interface';
import { RolesInterface } from '../interfaces/roles.interface';
import { ModulosxrolInterface } from '../interfaces/modulosxrol.interface';

@Injectable({
  providedIn: 'root'
})
export class ModulosyrolesService {

  private BASE_URL = Environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getModulos(): Observable<ModulosInterface[]> {
    return this.http.get<ModulosInterface[]>(`${this.BASE_URL}/get_modulos`);
  }

  getRoles(): Observable<RolesInterface[]> {
    return this.http.get<RolesInterface[]>(`${this.BASE_URL}/get_roles`);
  }

  getModulosxrol(): Observable<ModulosxrolInterface[]> {
    return this.http.get<ModulosxrolInterface[]>(`${this.BASE_URL}/get_modulosxroles`);
  }


}
