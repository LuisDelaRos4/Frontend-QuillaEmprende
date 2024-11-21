import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.scss'
})
export class PageMainComponent {

}
