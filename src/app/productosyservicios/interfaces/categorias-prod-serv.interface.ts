export interface CategoriasProdServInterface {
  id?: number;
  usuario_id: number;
  tipo_id: number;
  nombre: string;
  estado?: boolean;
  fecha_registro?: Date;
  fecha_modificacion?: Date;
}
