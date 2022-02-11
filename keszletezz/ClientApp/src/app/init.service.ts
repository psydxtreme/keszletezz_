import { Injectable } from '@angular/core';
import productList from '../assets/datasource/product.json';
import inventoryList from '../assets/datasource/inventory.json';
import { Product } from '../app/_models/models';
import { Inventory } from '../app/_models/models';


@Injectable({
  providedIn: 'root'
})
export class InitService {
  productList: Product[] = productList;
  inventoryList: Inventory[] = inventoryList ;

  constructor() {
  }
}
