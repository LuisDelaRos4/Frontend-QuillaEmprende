import { Component, OnInit } from '@angular/core';
import { AbonosInterface } from '../../../interfaces/abonos.interface';
import { AbonosService } from '../../../services/abonos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-abonos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-abonos.component.html',
  styleUrl: './table-abonos.component.scss'
})
export class TableAbonosComponent implements OnInit {

  abonos: AbonosInterface[] = [];

  constructor(private abonosService: AbonosService) { }

  ngOnInit(): void {
    this.loadAbonos();
  }

  loadAbonos(): void {
    this.abonosService.getAbonos().subscribe({
      next: (data: AbonosInterface[]) => {
        console.log('Datos recibidos en table-abonos:', data);
        this.abonos = data;
      },
      error: (error) => {
        console.error('Error al obtener abonos en table-abonos:', error);
      }
    });
  }
}
