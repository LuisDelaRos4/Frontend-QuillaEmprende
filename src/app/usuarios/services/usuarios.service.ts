import { Injectable } from '@angular/core';
import { Environment } from '../../../../env/environment';
import { HttpClient } from '@angular/common/http';
import { GenerosInterface } from '../interfaces/generos.interface';
import { Observable } from 'rxjs';
import { TiposDocumentosInterface } from '../interfaces/tipos-documentos.interface';
import { UsuariosInterface } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private BASE_URL = Environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getGeneros(): Observable<GenerosInterface[]> {
    return this.http.get<GenerosInterface[]>(`${this.BASE_URL}/get_generos`);
  }

  getTiposDocumentos(): Observable<TiposDocumentosInterface[]> {
    return this.http.get<TiposDocumentosInterface[]>(`${this.BASE_URL}/get_tipos_documentos`);
  }

  getUsuarios(): Observable<UsuariosInterface[]> {
    return this.http.get<UsuariosInterface[]>(`${this.BASE_URL}/get_usuarios`);
  }
}
