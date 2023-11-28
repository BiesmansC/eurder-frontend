import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../model/item";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], filterWord: string): Item[] {
    if (items == null || filterWord == null) {
      return [];
    }
    return items.filter(item => item.name.toLowerCase().startsWith(filterWord.toLowerCase()));
  }
}
