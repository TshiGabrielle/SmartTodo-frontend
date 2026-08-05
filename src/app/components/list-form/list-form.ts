import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContextService } from '../../services/context';

import { Context } from '../../types/context';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './list-form.html',
  styleUrl: './list-form.css'
})
export class ListFormComponent
  implements OnInit {

  contexts: Context[] = [];

  selectedContextId = 0;

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

  add()
  {
    this.contextService
      .createList(
        this.selectedContextId,
        this.nom
      )
      .subscribe(() => {

        this.contextService
          .listAdded
          .next();

        this.nom = '';

      });
  }
}
