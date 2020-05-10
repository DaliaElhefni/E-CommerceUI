import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './Models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-Frontend';
  user : User;
  constructor(private _userService: UserService){
    
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
}
