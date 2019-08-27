import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from './dish';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DishService {
  // Base url
  baseurl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  }

  // POST
  CreateDish(data): Observable<Dish> {
    console.log( JSON.stringify(data));
    //http://localhost:8080/createDish?phoneNo=%2B91-7683922389
    return this.http.post<Dish>(this.baseurl + '/createDish', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
  }  
  
  // this.http.post('my-backend.com/file-upload', uploadData, {
  //   reportProgress: true,
  //   observe: 'events'
  // }).subscribe(event => {
  //     console.log(event); // handle event here
  //   });


  // GET
  GetIssue(id): Observable<Dish> {
    return this.http.get<Dish>(this.baseurl + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // GET
    GetDishId(id): Observable<Dish> {
      return this.http.get<Dish>(this.baseurl + '/getDishById?id=' + id)
      .pipe(
        catchError(this.errorHandl)
      )
    }


    // GET
    GetAllDishesId(uid): Observable<Dish> {
      return this.http.get<Dish>(this.baseurl + '/getDishesByuId?uid=' + uid)
      .pipe(
        catchError(this.errorHandl)
      )
    }

  // GET
  GetAllDishes(): Observable<Dish> {
    return this.http.get<Dish>(this.baseurl + '/getAlldishes/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateBug(id, data): Observable<Dish> {
    return this.http.put<Dish>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // PUT
    UpdateDishById(id, data): Observable<Dish> {
      return this.http.put<Dish>(this.baseurl + '/updateDishById?id=' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1), 
        catchError(this.errorHandl)
      )
    }

   

  // DELETE
  DeleteBug(id){
    return this.http.delete<Dish>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
