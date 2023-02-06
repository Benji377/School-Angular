import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./book";

@Injectable()
export class BookStoreService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  resetStore(): Observable<HttpResponse<Book[]>> {
    return this.http.delete<HttpResponse<Book[]>>(`${this.URL}/books`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/books`)
  }

  getAllBooksSearchTerm(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.URL}/books/search/${searchTerm}`);
   }

  createBook(book: Book): Observable<HttpResponse<Book>> {
    return this.http.post<HttpResponse<Book>>(`${this.URL}/book`, book);
  }

  deleteBook(isbn: string): Observable<HttpResponse<Book>> {
    return this.http.delete<HttpResponse<Book>>(`${this.URL}/book/${isbn}`);
   }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/book/${isbn}`);
  }

  updateBook(book: Book): Observable<HttpResponse<Book>> {
    return this.http.put<HttpResponse<Book>>(`${this.URL}/book/${book.isbn}`, book);
  }

  checkBook(isbn: string): Observable<HttpResponse<Book>> {
    return this.http.get<HttpResponse<Book>>(`${this.URL}/book/${isbn}/check`);
  }

  rateBook(isbn: string, rating: number): Observable<HttpResponse<Book>> {
    return this.http.post<HttpResponse<Book>>(`${this.URL}/book/${isbn}/rate`, {rating: rating});
   }
}
