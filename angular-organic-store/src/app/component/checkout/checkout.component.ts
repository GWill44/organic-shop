import { Component, OnInit } from '@angular/core';
import {Observable, tap} from "rxjs";
import {Product} from "../../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    postCode: new FormControl('', [Validators.required])
  });

  constructor() { }

  onSubmit(formContent) {
    console.log(formContent);
  }

  get firstName(){ return this.form.get('firstName'); }
  get lastName(){ return this.form.get('lastName'); }
  get addressLine1(){ return this.form.get('addressLine1'); }
  get addressLine2(){ return this.form.get('addressLine2'); }
  get city(){ return this.form.get('city'); }
  get postCode(){ return this.form.get('postCode'); }
}
