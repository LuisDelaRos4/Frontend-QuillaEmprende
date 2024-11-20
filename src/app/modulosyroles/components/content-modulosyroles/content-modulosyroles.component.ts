import { Component, OnInit } from '@angular/core';
import { TableModulosComponent } from "../tables-modulosyroles/table-modulos/table-modulos.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableRolesComponent } from "../tables-modulosyroles/table-roles/table-roles.component";
import { TableModulosxrolComponent } from "../tables-modulosyroles/table-modulosxrol/table-modulosxrol.component";

@Component({
  selector: 'app-content-modulosyroles',
  standalone: true,
  imports: [CommonModule, TableModulosComponent, RouterOutlet, TableRolesComponent, TableModulosxrolComponent],
  templateUrl: './content-modulosyroles.component.html',
  styleUrl: './content-modulosyroles.component.scss'
})
export class ContentModulosyrolesComponent {

}
