import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../../../../helpers/must-match.validator';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  imageToUpload;
  submitted = false;
  profileimage: File;
  errorMessage = null;
  constructor(private toastr: ToastrService, private _authenticationService: AuthenticationService,  private router: Router, private formBuilder: FormBuilder, private cookie: CookieService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      "username": ['', [Validators.required]],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      "confirmPassword": ['', Validators.required],
      "phone": ['', [Validators.required, Validators.maxLength(11), Validators.minLength, Validators.pattern("^[0][1][0-9]{9}$")]],
      "profileimage": ['', Validators.required],
      "gender": ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.registerForm.controls; }

  onFileChange(event) {
    this.profileimage = event.target.files[0];
    this.imageToUpload = event.target.files[0].name;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // put data in Formdata
    const formData = new FormData();
    formData.append('username', this.registerForm.get('username').value);
    formData.append('email', this.registerForm.get('email').value);
    formData.append('password', this.registerForm.get('password').value);
    formData.append('phone', this.registerForm.get('phone').value);
    formData.append('profileimage', this.profileimage, this.profileimage.name);
    formData.append('gender', this.registerForm.get('gender').value);

    this._authenticationService.registerUser(formData)
      .subscribe(
        res => {
          this.cookie.set('token', res.token);
          this.toastr.success("Succesful Register");
          this.router.navigate(['/home'])
          .then(() => {
           window.location.reload();
          });
        },
        err => {
          if(err.statusText === "Unknown Error"){
            this.toastr.error("Server is down! Try again later.")
          }
          else{
            this.errorMessage = err.error
            this.toastr.error("Something Wrong, Check Fields Again")
          }
        }
      );
  }

}
