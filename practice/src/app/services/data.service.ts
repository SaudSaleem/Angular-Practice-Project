import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
//move all services (http requests) implementation in service file, to allow component to remain focused at presentational view
// also this structure help us for seperation of concerns
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private url: string = "";
  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }
  create (resource: { title: string }) {
    return this.http.post(this.url, JSON.stringify(resource )).pipe(
      catchError((error: Response) => {
        if (error.status == 400) {
          return throwError(() => new BadInput(error.json())); //expected errors
        }
        return throwError(() => new AppError(error.json())); //unexpected errors
      })
    );
  }
  update(resource: { title: string }) {
    return this.http.put(this.url, JSON.stringify(resource));
    //return this.http.patch(this.url,JSON.stringify(post))
  }
  //.pipe(catchError(err => of([])))
  delete (id: number) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
    );
    //above we catch error in service file instead in component for separations of concerns
    //so we import catchError operator (method) of RxJs which return Observeable of error Observable<error>
  }
  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(() => new BadInput(error.json())); //expected errors
    } else if (error.status === 404) {
      return throwError(() => new NotFoundError()); //expected errors
    } else {
      return throwError(() => new AppError()); //unexpected errors
    }
  }
}
//catchError operator of observalbe help us to cacth error and return observable of error
//pipe method of obserable is used to invokes the operators(methods) of observable in sequnece, then it return
//the obserable to consumer who subscribe to that actual observerable
