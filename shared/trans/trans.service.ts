import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trans } from './trans';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  otp:string;
  // Base url
  baseurl = 'http://108.179.222.240:8080';
  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  }

  // POST
  CreateTrans(data): Observable<Trans> {
    
    //http://localhost:8080/createTrans?phoneNo=%2B91-7683922389
    return this.http.post<Trans>(this.baseurl + '/createTransaction', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
  }  

  // GET
  GetTrans(uid, cid, did) {
    return this.http.get(this.baseurl + '/getTrans?userId='+uid+'&cookId='+cid+'&dishId='+did, {responseType: 'text'})
    .pipe(
      catchError(this.errorHandl)
    )
  }

    // GET
    GetTransId(phoneNo): Observable<Trans> {
      return this.http.get<Trans>(this.baseurl + '/getTransByPhone?phoneNo=' + phoneNo)
      .pipe(
        catchError(this.errorHandl)
      )
    }

        // GET
        GetTransById(phoneNo): Observable<Trans> {
          return this.http.get<Trans>(this.baseurl + '/getTransById?id=' + phoneNo)
          .pipe(
            catchError(this.errorHandl)
          )
        }

  // GET
  GetIssues(): Observable<Trans> {
    return this.http.get<Trans>(this.baseurl + '//')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

 

  // PUT
  UpdateBug(id, data): Observable<Trans> {
    return this.http.put<Trans>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // PUT
    UpdateTransById(id, data): Observable<Trans> {
      return this.http.put<Trans>(this.baseurl + '/updateTransChefinfoById?id=' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1), 
        catchError(this.errorHandl)
      )
    }

        // PUT
        UpdateTransVerfById(id, data): Observable<Trans> {
          return this.http.put<Trans>(this.baseurl + '/updateTransVerfById?id=' + id, JSON.stringify(data), this.httpOptions)
          .pipe(
            catchError(this.errorHandl)
          )
        }

  // DELETE
  DeleteTrans(uid, cid, did){
    return this.http.delete<Trans>(this.baseurl + '/deleteTransById?userId='+uid+'&cookId='+cid+'&dishId='+did, this.httpOptions)
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
