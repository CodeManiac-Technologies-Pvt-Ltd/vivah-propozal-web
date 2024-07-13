
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Option } from '../interfaces/option';

const apis = {
  get_options: environment.apiUrl + "/user/options"
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getAuthorizationToken(): string {
    const user: User = JSON.parse(window.localStorage.getItem("user") || "{}");
    return ( user.token || '')
  }
  getUserOptions() {
    return this.http.get<Option>(apis.get_options);
  }
}
