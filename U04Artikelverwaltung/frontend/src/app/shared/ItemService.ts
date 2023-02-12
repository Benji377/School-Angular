import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "./rohdateien/item";

@Injectable()
export class ItemService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  async getAllItems(): Promise<Item[]> {
    return this.http.get<Item[]>(`${this.URL}/items`).toPromise();
  }

  async getItem(id: string): Promise<Item> {
    return this.http.get<Item>(`${this.URL}/items/${id}`).toPromise();
  }

  async checkIdExists(id: string): Promise<HttpResponse<Item>> {
    return this.http.get<HttpResponse<Item>>(`${this.URL}/items/${id}`).toPromise();
  }

  async createItem(item: Item): Promise<HttpResponse<Item>> {
    return this.http.post<HttpResponse<Item>>(`${this.URL}/items`, item).toPromise();
  }

  async updateItem(item: Item): Promise<HttpResponse<Item>> {
    return this.http.put<HttpResponse<Item>>(`${this.URL}/items/${item.id}`, item).toPromise();
  }

  async deleteItem(id: string): Promise<HttpResponse<Item>> {
    return this.http.delete<HttpResponse<Item>>(`${this.URL}/items/${id}`).toPromise();
  }

  async deleteAllItems(): Promise<number> {
    let deleted: number = 0;
    const deletePromises: Promise<number>[] =(
      await this.getAllItems()).map(
        item => this.deleteItem(item.id).then(_ => deleted++)
      );
    for(const deletePromise of deletePromises) {
      await deletePromise;
    }
    return deleted;
  }

  async createAllItems(items: Item[]): Promise<number> {
    let created: number = 0;
    for (const item of items) {
      await this.createItem(item).then(_ => created++);
    }
    return created;
  }

}
