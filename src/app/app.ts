import { Component } from '@angular/core';
import { ContextListComponent } from './components/context-list/context-list';
import { ContextFormComponent } from './components/context-form/context-form';
import { ListListComponent } from './components/list-list/list-list';
import { ListFormComponent } from './components/list-form/list-form';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContextListComponent,
    ContextFormComponent,
    ListListComponent,
    ListFormComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
