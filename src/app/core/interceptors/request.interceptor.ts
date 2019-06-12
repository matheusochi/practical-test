import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map, filter, tap} from 'rxjs/operators';

import {environment} from '@env/environment';
import {MessagesService} from '@core/services/messages.service';
import {LoaderService} from '@core/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private messagesService: MessagesService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = `${environment.token}`;
    const url = `${environment.url}${request.url}`;

    request = request.clone({
      url,
      setHeaders: {
        Accept: 'application/json',
        Authorization: `token ${token}`
      }
    });

    this.loaderService.showLoader();

    return next.handle(request).pipe(
      filter((response: HttpEvent<any>) => response instanceof HttpResponse),
      tap((response: any) => {
        if (request.method !== 'GET' && response.message) {
          this.messagesService.showSnackbar(response.message);
        }
      }),
      map((response: any) => {
        return response;
      }),
      finalize(() => this.loaderService.hideLoader()),
      catchError(error => this.handleError(request, error)),
    );
  }

  private handleError(httpRequest: HttpRequest<any>, httpError: HttpErrorResponse): Observable<never> {
    if (!environment.production) {
      console.warn('REQUEST FAILED', httpRequest, httpError);
    }

    if (httpError.status === 400 || httpError.status === 422) {
      const errors = httpError.error.errors || [];
      const validationError = Object.keys(errors)
        .map(key => errors[key].toString())
        .join('\n');

      return this.showError(httpError, validationError);
    }

    if (httpError.status === 401 || httpError.status === 403) {
      return this.showError(httpError);
    }

    if (httpError.status >= 500) {
      const message = 'Ocorreu um erro. Tente novamente mais tarde.';
      return this.showError(httpError, message);
    }

    return this.showError(httpError);
  }

  private showError(httpError: HttpErrorResponse, message?: string) {
    message = Boolean(message) ? message : httpError.error.message;

    this.messagesService.showSnackbar(message, 'error');
    return throwError(httpError);
  }

}
