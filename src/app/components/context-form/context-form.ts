import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContextService }
  from '../../services/context';

@Component({
  selector: 'app-context-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './context-form.html',
  styleUrl: './context-form.css'
})
export class ContextFormComponent {

  nom = '';

  constructor(
    private contextService:
    ContextService
  ) {
  }

  add()
  {
    this.contextService
      .create(this.nom)
      .subscribe(() =>
      {
        this.contextService
          .contextAdded
          .next();

        this.nom = '';
      });
  }
}
