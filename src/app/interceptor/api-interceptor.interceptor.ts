import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../servies/api.service';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken: string = this.auth.getAuthorizationToken();

    const authRequest: HttpRequest<unknown> = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`)
    })
    return next.handle(authRequest);
  }
}
