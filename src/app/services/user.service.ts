import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse }    from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private _getUserUrl = "http://localhost:3000/users/user"
private _updateUserUrl = "http://localhost:3000/users/1"

  constructor(private _httpclient : HttpClient) { }

  getUser(){
    return this._httpclient.get(this._getUserUrl);
  }

  updateUser(body){
    return this._httpclient.put<any>(this._updateUserUrl,body);
  }

}
