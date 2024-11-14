import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend-QuillaEmprende';
}
