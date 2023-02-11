import { ItemService } from './../shared/ItemService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.scss']
})
export class DeleteAllComponent implements OnInit {
  error!: HttpErrorResponse;

  constructor(private is: ItemService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.is.deleteAllItems()
    .then(_ => this.router.navigate(['/articles']))
    .catch(error => this.error = error);
  }

  back() {
    this.router.navigate(['/home']);
  }

}
