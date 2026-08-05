import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TodoList } from '../types/todo-list';
import { Context } from '../types/context';
import {TodoTask} from '../types/todo-task';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private apiUrl =
    'http://localhost:5013/api/contexts';

  public contextAdded = new Subject<void>();
  public listAdded = new Subject<void>();
  public taskAdded = new Subject<void>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Context[]> {

    return this.http.get<Context[]>(
      this.apiUrl
    );

  }

  //cas 2 : créer contexte
  create(nom: string): Observable<boolean> {

    return this.http.post<boolean>(
      this.apiUrl,
      {
        nom: nom
      }
    );

  }

  //cas 3 : récupérer liste d'un contexte
  getLists(
    contextId: number
  )
  {
    return this.http.get<TodoList[]>(
      `${this.apiUrl}/${contextId}/lists`
    );
  }

  //cas 4 : créer liste
  createList(
    contextId: number,
    nom: string
  )
  {
    return this.http.post<boolean>(
      `${this.apiUrl}/${contextId}/lists`,
      {
        nom: nom
      }
    );
  }

// cas 5 : afficher liste de tâches
  getTasks(
    contextId: number,
    listId: number
  )
  {
    return this.http.get<TodoTask[]>(
      `${this.apiUrl}/${contextId}/lists/${listId}/tasks`
    );
  }

  //cas 6 : créer tâche
  createTask(
    contextId: number,
    listId: number,
    nom: string
  )
  {
    return this.http.post<boolean>(
      `${this.apiUrl}/${contextId}/lists/${listId}/tasks`,
      {
        nom: nom
      }
    );
  }


}
