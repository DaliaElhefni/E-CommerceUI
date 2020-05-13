import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookie : CookieService, private router: Router) { }

  ngOnInit(): void {
  }
  redirectTo(){
    if(this.cookie.get('token') !== ""){
      window.location.reload();
    }
    else{
      this.router.navigate([`login`, {}]);
    }
  }
}
