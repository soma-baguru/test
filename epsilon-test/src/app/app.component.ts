import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  listOfProducts: any[] = [{ name: 'aProduct', price: 1000, category: 'dCaregory' },
  { name: 'bProduct', price: 4000, category: 'cCaregory' },
  { name: 'cProduct', price: 3000, category: 'bCaregory' },
  { name: 'dProduct', price: 6000, category: 'aCaregory' }];

  assendingSort: boolean;
  arrowImage: string = '/assets/images/uparrow.svg';
  @ViewChild('productname') nameCol: ElementRef;
  @ViewChild('productprice') priceCol: ElementRef;
  @ViewChild('productcategory') categoryCol: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.assendingSort = true;
    this.sort('name');
  }

  ngAfterViewInit(): void {
    this.nameCol.nativeElement.addEventListener('click', () => this.sort('name'));
    this.categoryCol.nativeElement.addEventListener('click', () => this.sort('category'));
    this.priceCol.nativeElement.addEventListener('click', () => this.sort('price'));
  }

  sort(col: string) {
    let cb = (a, b) => {
      const value1 = typeof a[col] === 'string' ? a[col].toUpperCase() : a[col];
      const value2 = typeof b[col] === 'string' ? b[col].toUpperCase() : b[col];
      if (value1 < value2) {
        return this.assendingSort ? 1 : -1;
      }
      if (value1 > value2) {
        return this.assendingSort ? -1 : 1;
      }
      return 0;
    }

    if (this.assendingSort) {
      this.arrowImage = '/assets/images/uparrow.svg'
      this.assendingSort = false;
      this.listOfProducts.sort(cb)
    } else {
      this.arrowImage = '/assets/images/downarrow.svg'
      this.assendingSort = true;
      this.listOfProducts.sort(cb)
    }
  }

}
