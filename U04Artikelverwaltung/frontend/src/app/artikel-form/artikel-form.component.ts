import { ItemService } from './../shared/ItemService';
import { ItemFactory } from './../shared/rohdateien/Item-factory';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../shared/rohdateien/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artikel-form',
  templateUrl: './artikel-form.component.html',
  styleUrls: ['./artikel-form.component.scss']
})
export class ArtikelFormComponent implements OnInit {
  artikelForm!: FormGroup;
  imagesForm!: FormGroup;
  editing: boolean = false; // Set to true or false depending if the user is editing the article or not
  // Will later be used in the template to change from "OK" to "Ändern"

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private is: ItemService) { }

  async ngOnInit(): Promise<void> {
    const params = this.route.snapshot.firstChild?.params.code;
    let item: Item = ItemFactory.empty();
    console.log(params);

    if (params) {
      await this.is.getItem(params)
        .then(response => {item = response; console.log("Executed")})
        .catch(error => {item = ItemFactory.empty(); console.error(error)});
    }

    this.artikelForm = this.fb.group({
      id: [item.id, Validators.required],
      description: [item.description, Validators.required],
      price: this.fb.group({
        purchaseprice: [item.purchasingPrice, Validators.required],
        retailprice: [item.retailPrice, Validators.required]
      }),
      launchdate: [item.launchDate],
      images: this.fb.array([
        this.imagesForm = this.fb.group({
          url: [item.images[0].url, Validators.required],
          title: [item.images[0].title, Validators.required]
        }),
      ])
    });
  }

  register() {
    const item = ItemFactory.empty();
    Object.assign(item, this.artikelForm.value);
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
