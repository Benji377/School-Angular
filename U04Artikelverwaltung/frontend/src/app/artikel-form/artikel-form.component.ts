import { FormValidator } from './../shared/FormValidator';
import { ItemService } from './../shared/ItemService';
import { ItemFactory } from './../shared/rohdateien/Item-factory';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Item } from '../shared/rohdateien/item';
import { Image } from '../shared/rohdateien/image';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';


class PricesCrossFieldErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null,
    form: FormGroupDirective | NgForm | null): boolean {
      return control?.dirty && form?.form.get('price')?.hasError('priceIsValid') ? true : false;
  }
 }

 class ImageCrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null,
    form: FormGroupDirective | NgForm | null): boolean {
      return control?.dirty && (form?.form.get('images')?.hasError('urlIsValid')) ? true : false;
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
  imagesErrorMatcher = new ImageCrossFieldErrorMatcher();
  editing: boolean = false;
  url_params: string = "";

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private is: ItemService,
    private router: Router
    ) { }

  async ngOnInit(): Promise<void> {
    const params = this.route.snapshot.firstChild?.params.code;
    let item: Item = ItemFactory.empty();
    this.editing = false;
    console.log(params);

    if (params) {
      await this.is.getItem(params)
        .then(response => {item = response; this.editing = true; this.url_params = params})
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
      ], Validators.compose([Validators.minLength(1), FormValidator.urlIsValid]))
    });
  }

  async register() {
    const item = ItemFactory.empty();
    // Object.assign(item, this.artikelForm.value);
    console.log(this.artikelForm.value);
    let result = this.artikelForm.value;

    if (this.url_params) {
      item.id = this.url_params;
    } else {
      item.id = this.artikelForm.get('id')?.value;
    }

    item.description = result.description;
    item.number = result.amount;
    item.purchasingPrice = result.price.purchaseprice;
    item.retailPrice = result.price.retailprice;
    item.launchDate = result.launchdate;

    for (const image of result.images) {
      item.images.push(new Image(image.url, image.title));
    }

    console.log("Item: ", item);

    if (this.editing) {
      await this.is.updateItem(item)
      .then(response => console.log("Item edited: ", response))
      .catch(error => console.error("Couldn't edit item:", error));
    } else {
      await this.is.createItem(item)
      .then(response => console.log("Item added: ", response))
      .catch(error => console.error("Couldn't add item: ", error));
    }

    this.artikelForm.reset(ItemFactory.empty());
    this.router.navigate(['/home']);
  }

  get images(): FormArray {
    return this.artikelForm.get('images') as FormArray;
  }

  addImageControl() {
    this.images.push(this.fb.control(null, Validators.required));
  }

  removeImageControl(i: number) {
    this.images.removeAt(i);
  }

  async removeItem() {
    console.log("Removing ID: ", this.url_params)
    await this.is.deleteItem(this.url_params)
      .then(_ => console.log("Success"))
      .catch(err => console.error(err));
    this.router.navigate(['/home']);
  }

}
