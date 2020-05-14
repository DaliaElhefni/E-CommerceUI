import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'
import { from } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Models/Product.model';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  AllProducts;
  Products;
  mymodel;
  Form: FormGroup;
  product = new Product();
  imageToUpload;
  subscrription;
  productimage: File;
  submitted = false;
  userRole;

  constructor(private myService: ProductsService, private formBuilder: FormBuilder, private cookie: CookieService) {
    this.initializeForm();
    let token = this.cookie.get('token');
    const tokenPayload = decode(token);
    this.userRole = tokenPayload.role;
  }

  initializeForm() {
    this.Form = this.formBuilder.group({
      title: ['', [Validators.required]],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      details: ['', Validators.required],
      promotion: ['0', Validators.required],
      productimage: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.subscrription = this.myService.getProducts()
      .subscribe((Products) => {
        this.Products = Products;
        this.AllProducts = Products;
      },
        (err) => {
        });
  }

  ngOnDestroy(): void {
    this.subscrription.unsubscribe();
  }

  get f() { return this.Form.controls; }

  onFileChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.Form.patchValue({
      productimage: file
    });
    this.Form.get('productimage').updateValueAndValidity()
  }

  AddProduct() {
    this.submitted = true;

    var formData: any = new FormData();
    formData.append("title", this.Form.get('title').value);
    formData.append('quantity', this.Form.get('quantity').value);
    formData.append('price', this.Form.get('price').value);
    formData.append('details', this.Form.get('details').value);
    formData.append('promotion', this.Form.get('promotion').value);
    formData.append("productimage", this.Form.get('productimage').value);

    this.myService.addProduct(formData)
      .subscribe(
        (data: Product) => {
          this.AllProducts.push(data);
          this.initializeForm();
        },
        (error) => {
        })
  }

  Search(event) {
    this.Products = this.AllProducts.filter(p => p.title.toLowerCase().includes(event.target.value))
  }
}
