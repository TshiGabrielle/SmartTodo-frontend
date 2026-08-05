import { Component } from '@angular/core';
import { ContextListComponent } from './components/context-list/context-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContextListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
