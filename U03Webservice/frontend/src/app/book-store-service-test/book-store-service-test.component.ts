import { BookFactory } from './../shared/book-factory';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store-service';


@Component({
  selector: 'app-book-store-service-test',
  templateUrl: './book-store-service-test.component.html',
  styleUrls: ['./book-store-service-test.component.scss']
})
export class BookStoreServiceTestComponent implements OnInit {
  books: Book[] | null = null;
  book: Book | null = null;
  error: HttpErrorResponse | null = null;
  response: HttpResponse<Book> | null = null;
  responses: HttpResponse<Book[]> | null = null;

  tempIsbn: string | null = null;

  constructor(private bs: BookStoreService) { }

  ngOnInit() { }

  clearOutput() {
    this.book = null;
    this.books = null;
    this.error = null;
    this.response = null;
    this.responses = null;
  }

  createRandomBook() {
    let tempbook = BookFactory.random();
    if (this.tempIsbn != null) {
      tempbook.isbn = this.tempIsbn;
      this.tempIsbn = null;
    } else {
      this.tempIsbn = tempbook.isbn;
    }
    this.createBook(tempbook);
  }

  updateRandomBook(isbn: string) {
    let tempbook = BookFactory.random();
    tempbook.isbn = isbn;
    this.updateBook(tempbook);
  }

  resetStore() {
    this.clearOutput();
    this.bs.resetStore()
      .subscribe(
        response => this.responses = response,
        error => this.error = error
      )
  }

  getAllBooks() {
    this.clearOutput();
    this.bs.getAllBooks()
      .subscribe(
        response => this.books = response,
        error => this.error = error
      );
  }

  getAllBooksSearchTerm(searchTerm: string) {
    this.clearOutput();
    this.bs.getAllBooksSearchTerm(searchTerm)
      .subscribe(
        response => this.books = response,
        error => this.error = error
      )
  }

  createBook(book: Book) {
    this.clearOutput();
    this.bs.createBook(book)
      .subscribe(
        response => this.response = response,
        error => this.error = error
      )
  }

  deleteBook(isbn: string) {
    this.clearOutput();
    this.bs.deleteBook(isbn)
      .subscribe(
        response => this.response = response,
        error => this.error = error
      )
  }

  getBook(isbn: string) {
    this.clearOutput();
    this.bs.getBook(isbn)
      .subscribe(
        response => this.book = response,
        error => this.error = error
      )
  }

  updateBook(book: Book) {
    this.clearOutput();
    this.bs.updateBook(book)
      .subscribe(
        response => this.response = response,
        error => this.error = error
      )
  }

  checkBook(isbn: string) {
    this.clearOutput();
    this.bs.checkBook(isbn)
    .subscribe(
      response => this.response = response,
      error => this.error = error
    )
  }

  rateBook(isbn: string, rating: number) {
    this.clearOutput();
    this.bs.rateBook(isbn, rating)
      .subscribe(
        response => this.response = response,
        error => this.error = error
      )
  }

}
