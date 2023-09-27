import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }

  LogIn(email: any) {
    return this.http.post<any>(environment.url + '/authenticate', email);
  }

  GetMyProject(token: any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(environment.url + '/info', { headers });
  }
}
