import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _url: string

  constructor(private _http: HttpClient) {
    this._url = `${environment.backendUrl}/items`;
  }

  getAllItems(): Observable<Item[]> {
    return this._http
      .get<Item[]>(this._url);
  }
}
