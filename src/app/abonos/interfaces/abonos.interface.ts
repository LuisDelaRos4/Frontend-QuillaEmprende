export interface AbonosInterface {
  id?: number;
  venta_id: number;
  valor: number;
  estado?: boolean;
  fecha_registro?: Date;
  fecha_modificacion?: Date;
}
