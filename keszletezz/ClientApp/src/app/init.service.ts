import { Injectable } from '@angular/core';
import products from '../assets/datasource/datasource.json';
import { Product } from '../app/_models/models';


@Injectable({
  providedIn: 'root'
})
export class InitService {
  products: Product[] = products;

  constructor() {
  }
}
