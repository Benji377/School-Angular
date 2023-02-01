import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store-service';


@Component({
  selector: 'app-book-store-service-test',
  templateUrl: './book-store-service-test.component.html',
  styleUrls: ['./book-store-service-test.component.scss']
})
export class BookStoreServiceTestComponent implements OnInit {
  books!: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    // this.books = this.bs.getAllBooksSearchTerm('Angular');
  }

}
