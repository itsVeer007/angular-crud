import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl: string = 'http://localhost:9000';

  constructor(private http: HttpClient) { }


  //Get All Users
  public getAllUsers(): Observable<User[]> {
    let dataUrl: string = `${this.serverUrl}/users`;
    return this.http.get<User[]>(dataUrl);

  }

  //Get User
  public getUser(userId: string): Observable<User> {
    let dataUrl: string = `${this.serverUrl}/users/${userId}`;
    return this.http.get<User>(dataUrl);
  }

  //Create User
  public createUser(user: any): Observable<User> {
    let dataUrl: string = `${this.serverUrl}/users`;
    return this.http.post<User>(dataUrl, user);
  }

  //Update User
  public updateUser(user: any, userId: string): Observable<User> {
    let dataUrl: string = `${this.serverUrl}/users/${userId}`;
    return this.http.put<User>(dataUrl, user);
  }

  //Delete User
  public deleteUser(userId: string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/users/${userId}`;
    return this.http.delete<{}>(dataUrl);
  }

}
