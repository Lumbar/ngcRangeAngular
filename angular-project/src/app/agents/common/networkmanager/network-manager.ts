import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostParameters } from './post-parameters';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NetworkManager {

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  post(postParameters: PostParameters): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };
    const parameters = postParameters.RequestParameter || null;

    return Observable.create(observer => {
      this.httpClient.post(`${postParameters.PathOperation}`, JSON.stringify(parameters), options).subscribe(
        response => {
          try {
            observer.next(response);
          } catch (e) {
            this.snackBar.open(e.message, 'close', { duration: 5000, panelClass: ['error-snackbar'] });
            observer.error(e);
          }
        },
        httpError => {
          this.snackBar.open('Ha ocurrido un error al tratar de procesar la acción requerida.', 'close', { duration: 5000, panelClass: ['error-snackbar'] });
          observer.error(httpError);
        },
        () => {
          observer.complete();
        });
    });
  }
}
