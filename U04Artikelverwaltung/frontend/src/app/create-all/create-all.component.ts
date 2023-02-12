import { ItemFactory } from './../shared/rohdateien/Item-factory';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../shared/ItemService';

@Component({
  selector: 'app-create-all',
  templateUrl: './create-all.component.html',
  styleUrls: ['./create-all.component.scss']
})
export class CreateAllComponent implements OnInit {
  error!: HttpErrorResponse;

  constructor(private is: ItemService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.is.deleteAllItems()
      .then()
      .catch(error => this.error = error)


    await this.is.createAllItems(ItemFactory.items())
      .then(_ => this.router.navigate(['/articles']))
      .catch(error => this.error = error)
  }

  back() {
    this.router.navigate(['/home']);
  }

}
