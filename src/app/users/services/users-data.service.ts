import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService extends DefaultDataService<User> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('User', http, httpUrlGenerator);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users`);
  }
}
