import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./book";

@Injectable()
export class BookStoreService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  resetStore(): Observable<Book> {
    return this.http.delete<Book>(`${this.URL}/books`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/books`)
  }

  getAllBooksSearchTerm(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/books/search/${searchTerm}`);
   }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.URL}/book`, book);
  }

  deleteBook(isbn: string): Observable<Book> {
    return this.http.delete<Book>(`${this.URL}/book/${isbn}`);
   }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/book/${isbn}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.URL}/book/${book.isbn}`, book);
  }

  checkBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/book/${isbn}/check`);
  }

  rateBook(isbn: string, rating: number): Observable<Book> {
    return this.http.post<Book>(`${this.URL}/book/${isbn}/rate`, rating);
   }
}
