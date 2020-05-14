import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../../../../helpers/must-match.validator';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  errorMessage = null;

  constructor(private toastr: ToastrService, private _authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder, private cookie: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    this.errorMessage = null;
    if (this.loginForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('email', this.loginForm.get('email').value);
    formData.append('password', this.loginForm.get('password').value);

    delete this.loginForm.value.confirmPassword;

    this._authenticationService.loginUser(this.loginForm.value).subscribe(
      res => {
        this.cookie.set('token', res.token);
        this.toastr.success("Succesful Login");
        this.router.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
      },
      err => {
        if (err.statusText === "Unknown Error") {
          this.toastr.error("Server is down! Try again later.");
        }
        else {
          this.errorMessage = err.error
          this.toastr.error("Something Wrong, Check Fields Again");
        }
      }
    );
  }
  
}
