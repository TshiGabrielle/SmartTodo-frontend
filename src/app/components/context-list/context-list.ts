import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Context } from '../../types/context';
import { ContextService } from '../../services/context';

@Component({
  selector: 'app-context-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './context-list.html',
  styleUrl: './context-list.css'
})
export class ContextListComponent
  implements OnInit {

  contexts: Context[] = [];

  constructor(
    private contextService:
    ContextService
  ) {
  }

  ngOnInit(): void {

    this.loadContexts();

    this.contextService
      .contextAdded
      .subscribe(() => {

        this.loadContexts();

      });
  }

  loadContexts() {

    this.contextService
      .getAll()
      .subscribe(data => {

        console.log(data);

        this.contexts = [...data];

      });
  }
}
