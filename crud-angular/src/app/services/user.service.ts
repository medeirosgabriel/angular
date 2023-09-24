import { Injectable } from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {}

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`)
  }

  filterUsersByEmail(email: String): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
  }

  deleteUser(id: number) {
    return this.http.delete<User>(`${this.apiUrl}/${id}`);
  }
}
