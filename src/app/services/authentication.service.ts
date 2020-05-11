import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse }    from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

private _registerUrl = "http://localhost:3000/users/register"
private _loginUrl = "http://localhost:3000/users/login"

  constructor(private _httpClient :HttpClient ) { }

registerUser(user){
 return this._httpClient.post<any>(this._registerUrl,user)
//  .pipe(catchError(this.errorHandler))
}

loginUser(user){
  console.log(user)
  return this._httpClient.post<any>(this._loginUrl,user)
}

// errorHandler(error : HttpErrorResponse){
// return throwError(error);
// }


}
