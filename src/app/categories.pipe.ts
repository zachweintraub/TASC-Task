import { Pipe, PipeTransform } from '@angular/core';
import { InventoryProduct } from './InventoryProduct';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(value: InventoryProduct[], category: string) {
    if (category === 'All') {
      return value;
    }
    return value.filter(product => {
      return product.categories.includes(category);
    });
  }
}
