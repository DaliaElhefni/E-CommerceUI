import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service'
import { AuthenticationService } from '../../../services/authentication.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MustMatch } from '../../../../../helpers/must-match.validator';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  errorMessage = null;
  submitted = false;
  showImageModale = false;
  showPersonalModale = false;
  showContactModale = false;
  showPasswordModale = false;

  updatedImage: File;
  imageForm: FormGroup;
  personalForm: FormGroup;
  contactForm: FormGroup;
  passwordForm: FormGroup;

  username;
  profileimage: SafeResourceUrl;
  role;
  email;
  phone;
  gender;
  password;
  language;

  constructor(private toastr: ToastrService, private sanitizer: DomSanitizer, private _userService: UsersService, private cookie: CookieService, private _a: AuthenticationService, private formBuilder: FormBuilder) { }
  token = this.cookie.get('token');

  ngOnInit(): void {
    this.onLoad();

    this.imageForm = this.formBuilder.group({
      "profileimage": ['', Validators.required]
    });

    this.personalForm = this.formBuilder.group({
      "username": ['', [Validators.required]],
      "gender": ['', Validators.required]
    });

    this.contactForm = this.formBuilder.group({
      "email": ['', [Validators.required, Validators.email]],
      "phone": ['', [Validators.required, Validators.maxLength(11), Validators.minLength, Validators.pattern("^[0][1][0-9]{9}$")]],
    });

    this.passwordForm = this.formBuilder.group({
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });

  }

  get f() { return this.imageForm.controls; }
  get p() { return this.personalForm.controls; }
  get c() { return this.contactForm.controls; }
  get pass() { return this.passwordForm.controls; }


  onLoad() {
    this._userService.getUser()
      .subscribe(
        res => this.handleResponse(res),
      );
  }

  handleResponse(response) {
    this.username = response.username;
    this.email = response.email;
    this.profileimage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + response.profileimage);
    this.role = response.role;
    this.password = response.password;
    this.gender = response.gender;
    this.phone = response.phone;
  }

  onFileChange(event) {
    this.updatedImage = event.target.files[0];
  }

  onImageUpdate() {
    const formData = new FormData();
    formData.append('profileimage', this.updatedImage, this.updatedImage.name);
    this._userService.updateUser(formData).subscribe(
      err => this.toastr.error("Try Again Later"),
      res => {
        this.toastr.success("Updated Succesfully");
        this.onLoad();
      }
    );
  }

  onPersonalUpdate() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.personalForm.invalid) {
      return;
    }
    this._userService.updateUser(this.personalForm.value).subscribe(
      err => this.toastr.error("Try Again Later"),
      res => {
        this.toastr.success("Updated Succesfully");
        this.onLoad();
      }
    );
  }

  onContactUpdate() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this._userService.updateUser(this.contactForm.value).subscribe(
      err => this.toastr.error("Try Again Later"),
      res => {
        this.toastr.success("Updated Succesfully");
        this.onLoad();
      }
    );
  }

  onPasswordUpdate() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('password', this.passwordForm.get('password').value);

    this._userService.updateUser({ 'password': this.passwordForm.value.password }).subscribe(
      err => this.toastr.error("Try Again Later"),
      res => {
        this.toastr.success("Updated Succesfully");
        this.onLoad();
      }
    );
  }
}
