import { ItemFactory } from './../shared/rohdateien/Item-factory';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../shared/rohdateien/item';

@Component({
  selector: 'app-artikel-form',
  templateUrl: './artikel-form.component.html',
  styleUrls: ['./artikel-form.component.scss']
})
export class ArtikelFormComponent implements OnInit {
  artikelForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const item: Item = ItemFactory.empty()
    this.artikelForm = this.fb.group({
      id: [item.id, Validators.required],
      description: [item.description, Validators.required],
      price: this.fb.group({
        purchaseprice: [item.purchasingPrice, Validators.required],
        retailprice: [item.retailPrice, Validators.required]
      }),
      launchdate: [item.launchDate],
      images: this.fb.array([
        [item.images[0]],
        [item.images[1]]
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

}
