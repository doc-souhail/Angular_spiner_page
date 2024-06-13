import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  constructor() { }

  fetchUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      delay(2000) // Introduce a delay of 2 seconds
    );
  }
}
