import { Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";

export const routes: Routes = [
  {
    path: '',
    component: ItemOverviewComponent,
    title: 'Items',
  },
];
