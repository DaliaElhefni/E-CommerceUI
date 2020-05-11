import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './Models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-Frontend';
  user : User;
  constructor(private router: Router,private _userService: UserService , private cookie:CookieService){
    
  }
  ngOnInit(): void {
    
    this._userService.getUser()
      .subscribe(
        res => this.initializeUser(res),
        err => console.log(err)
      )
  }
  initializeUser(response) {
    this.user = new User();
    this.user = response;
  }
  toggleDropdown(){
    var dropDownIcon= document.querySelector("#dropDownIcon");
    if(dropDownIcon.classList.contains("fa-angle-up")){
      dropDownIcon.classList.remove("fa-angle-up");
      dropDownIcon.classList.add("fa-angle-down");
      return;
    }
    dropDownIcon.classList.remove("fa-angle-down");
    dropDownIcon.classList.add("fa-angle-up");
  }

 async onLogout(){
    this.cookie.delete('token');
  await  this.router.navigate([`home`, { }]);
    window.location.reload()
  }

  checkTokenExists(){
    if(this.cookie.check('token')){
      this.router.navigate([`products`, { }]);
    }else{
      this.router.navigate([`message`, { }]);
      setTimeout(()=>{
      this.router.navigate([`login`, { }]);
      },3000)
    }
  }
}
