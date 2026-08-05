import { Component } from '@angular/core';
import { ContextListComponent } from './components/context-list/context-list';
import { ContextFormComponent } from './components/context-form/context-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContextListComponent,
    ContextFormComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
