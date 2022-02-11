import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service';
import { Inventory } from '../_models/models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryList: Inventory[];

  constructor(private initservice: InitService) { }

  ngOnInit() {
    this.inventoryList = this.initservice.inventoryList;
  }

}
