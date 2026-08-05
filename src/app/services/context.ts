import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Context } from '../types/context';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private apiUrl =
    'http://localhost:5013/api/contexts';

  public contextAdded =
    new Subject<void>();

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<Context[]> {

    return this.http.get<Context[]>(
      this.apiUrl
    );

  }

}
