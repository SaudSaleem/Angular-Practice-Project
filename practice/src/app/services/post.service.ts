import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
//move all services (http requests) implementation in service file, to allow component to remain focused at presentational view
// also this structure help us for seperation of concerns
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  //get all users from our node server that we created
  getAllUsers()
  {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token')
    headers.append('Authorization','Bearer '+ token)
    let options  = { headers: headers };
    return this.http
    .get('http://127.0.0.1:3000/api/user', options).subscribe(res => console.log(res))
  }
  getPosts(): Observable<Object> {
    return this.http.get(this.url).pipe(map((response) => response)); //map take items of obserable and mutate it according to requiremtn,,it only invoked insde pipe() method
  }
  createPost(post: { title: string }) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      map((response) => response),
      catchError((error: Response) => {
        if (error.status == 400) {
          return throwError(() => new BadInput(error.json())); //expected errors
        }
        return throwError(() => new AppError(error.json())); //unexpected errors
      })
    );
  }
  updatePost(post: { title: string }) {
    return this.http.put(this.url, JSON.stringify(post)).pipe(map((response) => response));
    //return this.http.patch(this.url,JSON.stringify(post))
  }
  //.pipe(catchError(err => of([])))
  deletePost(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
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
