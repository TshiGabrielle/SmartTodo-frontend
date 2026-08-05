import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextService } from '../../services/context';

import { Context } from '../../types/context';
import { TodoList } from '../../types/todo-list';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskFormComponent
  implements OnInit {

  contexts: Context[] = [];

  lists: TodoList[] = [];

  selectedContextId = 0;

  selectedListId = 0;

  nom = '';

  constructor(
    private contextService:
    ContextService
  ) {
  }

  ngOnInit(): void {

    this.contextService
      .getAll()
      .subscribe(data => {

        this.contexts = data;

      });

  }

  loadLists()
  {
    this.selectedListId = 0;

    this.contextService
      .getLists(
        this.selectedContextId
      )
      .subscribe(data => {

        this.lists = data;

      });
  }

  add()
  {
    this.contextService
      .createTask(
        this.selectedContextId,
        this.selectedListId,
        this.nom
      )
      .subscribe(() => {

        this.contextService
          .taskAdded
          .next();

        this.nom = '';

      });
  }
}
