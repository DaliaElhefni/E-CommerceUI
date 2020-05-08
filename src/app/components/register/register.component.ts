import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { MustMatch } from '../../../../helpers/must-match.validator';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
=======
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
<<<<<<< HEAD
  imageToUpload;
  submitted = false;
  profileimage : File;
  errorMessage = null;
  constructor(private toastr: ToastrService, private _authenticationService:AuthenticationService , private formBuilder:FormBuilder , private cookie:CookieService) {
=======
  submitted = false;
  profileimage : File;
  errorMessage = null;
  constructor(private _authenticationService:AuthenticationService , private formBuilder:FormBuilder , private cookie:CookieService) {
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43

   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      "username": ['',[Validators.required]],
      "email": ['', [Validators.required, Validators.email]],
<<<<<<< HEAD
      "password": ['', [Validators.required, Validators.minLength(6) , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
=======
      "password": ['', [Validators.required, Validators.minLength(6)]],
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43
      "confirmPassword": ['', Validators.required],
      "phone": ['', [Validators.required , Validators.maxLength(11) , Validators.minLength , Validators.pattern("^[0][1][0-9]{9}$")]],
      "profileimage":['',Validators.required],
      "gender": ['', Validators.required],
  },
   {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }
  
  onFileChange(event) {
<<<<<<< HEAD
this.profileimage = event.target.files[0];
this.imageToUpload = event.target.files[0].name;
=======
    
this.profileimage = event.target.files[0];
    
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43
  }
  
  onSubmit() {

<<<<<<< HEAD

=======
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43
    this.submitted = true;
    this.errorMessage = null;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
    console.log("invalid")
     return;
    }
   
    
    // put data in Formdata
const formData = new FormData();
formData.append('username', this.registerForm.get('username').value);
formData.append('email', this.registerForm.get('email').value);
formData.append('password', this.registerForm.get('password').value);
formData.append('phone', this.registerForm.get('phone').value);
formData.append('profileimage', this.profileimage , this.profileimage.name);
formData.append('gender', this.registerForm.get('gender').value);

<<<<<<< HEAD
  // for (var pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  // }

=======
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43
this._authenticationService.registerUser(formData)
.subscribe(
  res => {
    this.cookie.set('token',res.token);
<<<<<<< HEAD
    this.toastr.success("Succesful Register")
  },
  err => {
    console.log(err)
    this.errorMessage = err.error
    this.toastr.error("Something Wrong, Check Fields Again")
  }
=======
  },
  err => this.errorMessage = err.error
>>>>>>> a3efe46f847d0e431990d40b7db7c4d7d1d0ff43
);

  }
  

}
