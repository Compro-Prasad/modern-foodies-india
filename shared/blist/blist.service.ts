import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blist } from './blist';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlistService {
  otp:string;
  // Base url
  baseurl = 'https://petuks.com:8080';

  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  }

  // POST
  CreateBlist(data): Observable<Blist> {
    
    //http://localhost:8080/createBlist?phoneNo=%2B91-7683922389
    return this.http.post<Blist>(this.baseurl + '/blacklistPerson', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
  }  

  // GET
  GetIssue(id): Observable<Blist> {
    return this.http.get<Blist>(this.baseurl + '/bugtracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // GET
    GetMapData(lat, lng): Observable<string> {
      return this.http.get<string>(this.baseurl + '/getMapData?lat='+lat+'&lng='+lng)
      .pipe(
        catchError(this.errorHandl)
      )
    }

    // GET
    GetBlistId(phoneNo): Observable<Blist> {
      return this.http.get<Blist>(this.baseurl + '/getBlistByPhone?phoneNo=' + phoneNo)
      .pipe(
        catchError(this.errorHandl)
      )
    }

        // GET
        GetBlistById(phoneNo): Observable<Blist> {
          return this.http.get<Blist>(this.baseurl + '/getBlistById?id=' + phoneNo)
          .pipe(
            catchError(this.errorHandl)
          )
        }

  // GET
  GetIssues(): Observable<Blist> {
    return this.http.get<Blist>(this.baseurl + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

 

  // PUT
  UpdateBug(id, data): Observable<Blist> {
    return this.http.put<Blist>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // PUT
    UpdateBlistById(id, data): Observable<Blist> {
      return this.http.put<Blist>(this.baseurl + '/updateBlistChefinfoById?id=' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1), 
        catchError(this.errorHandl)
      )
    }

        // PUT
        UpdateBlistVerfById(id, data): Observable<Blist> {
          return this.http.put<Blist>(this.baseurl + '/updateBlistVerfById?id=' + id, JSON.stringify(data), this.httpOptions)
          .pipe(
            catchError(this.errorHandl)
          )
        }

  // DELETE
  DeleteBug(id){
    return this.http.delete<Blist>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
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
