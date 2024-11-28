export interface ProductosServiciosInterface {
  id?: number;
  usuario_id: number;
  nombre: string;
  descripcion?: string;
  cantidad: number;
  precio: number;
  categoria_id: number;
  tipo_id: number;
  estado?: boolean;
  fecha_registro?: Date;
  fecha_modificacion?: Date;
}
