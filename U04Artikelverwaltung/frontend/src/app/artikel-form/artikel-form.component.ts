import { FormValidator } from './../shared/FormValidator';
import { ItemService } from './../shared/ItemService';
import { ItemFactory } from './../shared/rohdateien/Item-factory';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Item } from '../shared/rohdateien/item';
import { ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';


class PricesCrossFieldErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null,
  form: FormGroupDirective | NgForm | null): boolean {
    console.log(`Option: ${control?.dirty} && ${form?.form.get('price')?.value} && ${form?.form.get('price')?.hasError('priceIsValid')}`);
    return control?.dirty && form?.form.get('price')?.hasError('priceIsValid') ? true : false;
  }
 }


@Component({
  selector: 'app-artikel-form',
  templateUrl: './artikel-form.component.html',
  styleUrls: ['./artikel-form.component.scss']
})
export class ArtikelFormComponent implements OnInit {
  artikelForm!: FormGroup;
  imagesForm!: FormGroup;
  pricesErrorMatcher = new PricesCrossFieldErrorMatcher();
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private is: ItemService
    ) { }

  async ngOnInit(): Promise<void> {
    const params = this.route.snapshot.firstChild?.params.code;
    let item: Item = ItemFactory.empty();
    this.editing = false;
    console.log(params);

    if (params) {
      await this.is.getItem(params)
        .then(response => {item = response; this.editing = true; console.log("Executed")})
        .catch(error => {item = ItemFactory.empty(); console.error(error)});
    }

    this.artikelForm = this.fb.group({
      id: [{value: item.id, disabled: this.editing}, null, FormValidator.idIsValid(this.is)],
      description: [item.description, Validators.required],
      amount: [item.number, Validators.compose([Validators.required, Validators.min(0), Validators.pattern('^(0|[1-9][0-9]*)$')])],
      price: this.fb.group({
        purchaseprice: [item.purchasingPrice, Validators.compose([Validators.required, Validators.min(0)])],
        retailprice: [item.retailPrice, Validators.compose([Validators.required, Validators.min(0)])],
      }, {validators: FormValidator.priceIsValid}),
      launchdate: [item.launchDate, Validators.required],
      images: this.fb.array([
        this.imagesForm = this.fb.group({
          url: [item.images[0].url, Validators.required],
          title: [item.images[0].title]
        }),
      ], Validators.minLength(1))
    });
  }

  register() {
    const item = ItemFactory.empty();
    Object.assign(item, this.artikelForm.value);
    this.is.createItem(item);
    this.artikelForm.reset(ItemFactory.empty());
  }

  get images(): FormArray {
    return this.artikelForm.get('images') as FormArray;
  }

  addImageControl() {
    this.images.push(this.fb.control(null, Validators.email));
  }

  removeImageControl(i: number) {
    this.images.removeAt(i);
  }

}
