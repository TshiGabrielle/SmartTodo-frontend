import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContextService} from '../../services/context';
import {Context} from '../../types/context';
import {TodoList} from '../../types/todo-list';
import {TodoTask} from '../../types/todo-task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})

export class TaskListComponent implements OnInit {

  contexts: Context[] = [];

  lists: TodoList[] = [];

  tasks: TodoTask[] = [];

  selectedContextId = 0;

  selectedListId = 0;

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

    this.contextService
      .taskAdded
      .subscribe(() => {

        this.loadTasks();

      });

  }

  loadLists()
  {
    this.tasks = [];

    this.selectedListId = 0;

    this.contextService
      .getLists(
        this.selectedContextId
      )
      .subscribe(data => {

        this.lists = data;

      });
  }

  loadTasks()
  {
    this.contextService
      .getTasks(
        this.selectedContextId,
        this.selectedListId
      )
      .subscribe(data => {

        this.tasks = [...data];

      });
  }
}
