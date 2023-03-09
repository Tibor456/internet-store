import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'products-header.component.html' ,
  styles: [
  ]
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
sort = 'desc'
itemsShowCount=12;

onSortUpdated(newSort:string):void {
this.sort = newSort;
this.sortChange.emit(newSort);
}

onItemsUpdated(count: number): void {
  this.itemsCountChange.emit(count);
  this.itemsShowCount = count;
}

onColumnsUpdated(colsNum: number):void {
  this.columnsCountChange.emit(colsNum);
}
}

