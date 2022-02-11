import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import { Product } from '../_models/Models';
import { Category } from '../_models/Models'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  categoryList: Category[];



  filteredProductList = [];

  constructor(private initservice: InitService) { }

  ngOnInit() {
    this.productList = this.initservice.products;
    this.filteredProductList = this.productList;
    //  this.categoryList = Array.from(new Set(this.categoryList.map(e => e.category)));
    //}

    ////  filterList(category: string) {
    /////*    this.filteredProductList = this.categoryList.filter(e => e.category == category);*/
    ////  }

  }
}
