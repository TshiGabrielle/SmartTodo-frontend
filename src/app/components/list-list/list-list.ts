import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextService } from '../../services/context';
import { Context } from '../../types/context';
import { TodoList } from '../../types/todo-list';

@Component({
  selector: 'app-list-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './list-list.html',
  styleUrl: './list-list.css'
})

export class ListListComponent implements OnInit {

  contexts: Context[] = [];

  lists: TodoList[] = [];

  selectedContextId = 0;

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
      .listAdded
      .subscribe(() => {

        this.loadLists();

      });

  }

  loadLists()
  {
    if (
      this.selectedContextId === 0
    ) {
      return;
    }

    this.contextService
      .getLists(
        this.selectedContextId
      )
      .subscribe(data => {

        this.lists = [...data];

      });
  }
}
