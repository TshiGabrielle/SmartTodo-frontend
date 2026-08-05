import { Component } from '@angular/core';
import { ContextListComponent } from './components/context-list/context-list';
import { ContextFormComponent } from './components/context-form/context-form';
import { ListListComponent } from './components/list-list/list-list';
import { ListFormComponent } from './components/list-form/list-form';
import { TaskListComponent } from './components/task-list/task-list';
import { TaskFormComponent } from './components/task-form/task-form';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContextListComponent,
    ContextFormComponent,
    ListListComponent,
    ListFormComponent,
    TaskListComponent,
    TaskFormComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
