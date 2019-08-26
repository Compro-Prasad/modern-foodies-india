import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Otp } from './otp';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  // Base url
  baseurl = 'http://localhost:8080';
  otp: string;
  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  }

  // POST
  CreateOtp(data): Observable<Otp> {
    
    return this.http.post<Otp>(this.baseurl + '/createOtp', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
    
  }  

  // GET
  GetOtpById(id): Observable<Otp> {
    return this.http.get<Otp>(this.baseurl + '/getOtpByUserId?UserId=' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // GET
    GetOtpAccess(id): Observable<Otp> {
      return this.http.get<Otp>(this.baseurl + '/getOtpByAccessToken?accessToken=' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }

  // GET
  GetIssues(): Observable<Otp> {
    return this.http.get<Otp>(this.baseurl + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateBug(id, data): Observable<Otp> {
    return this.http.put<Otp>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }




  // DELETE
  DeleteOtp(id){
    return this.http.delete<Otp>(this.baseurl + '/deleteOtpByUserId?userid=' + id, this.httpOptions)
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
