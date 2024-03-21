import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
})
export class ProductHeaderComponent {
  sort: string= 'desc';
  itemsShowCount: number = 3;
  @Output() columnsCountChange = new EventEmitter<number>();

  onSortChange(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count : number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChange.emit(colsNumber)
  }

}
