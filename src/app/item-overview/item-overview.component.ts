import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemService} from "../service/item.service";
import {Observable} from "rxjs";
import {Item} from "../model/item";
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipes/name-filter.pipe";

@Component({
  selector: 'app-item-overview',
  standalone: true,
  imports: [CommonModule, FormsModule, NameFilterPipe],
  templateUrl: './item-overview.component.html',
  styleUrl: './item-overview.component.css'
})
export class ItemOverviewComponent implements OnInit {
  items: Observable<Item[]> | undefined;
  searchText: string = '';

  constructor(private _itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(): void {
    this.items = this._itemService.getAllItems();
  }
}
