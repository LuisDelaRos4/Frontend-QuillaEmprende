export interface UsuariosInterface {
  id?: number;
  rol_id: number;
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido?: string;
  fecha_nacimiento: Date;
  genero_id: number;
  tipo_documento_id: number;
  numero_documento: string;
  correo: string;
  contrasena: string;
  telefono: string;
  google?: number;
  estado?: number;
  fecha_registro?: Date;
  fecha_modificacion?: Date;
}
