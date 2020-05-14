import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _getUserUrl = "http://localhost:3000/users/user"
  private _updateUserUrl = "http://localhost:3000/users/1"

  constructor(private _httpclient: HttpClient) { }

  getUser() {
    return this._httpclient.get(this._getUserUrl);
  }

  updateUser(body) {
    return this._httpclient.put<any>(this._updateUserUrl, body);
  }
}
