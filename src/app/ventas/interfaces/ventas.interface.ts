export interface VentasInterface {
  id?: number;
  vendedor_id: number;
  comprador_id: number;
  producto_servicio_id: number;
  abono: number;
  saldo: number;
  estado?: boolean;
  fecha_registro?: Date;
  fecha_modificacion?: Date;
}
