import { BuyoutPage } from './../buyout/buyout';
import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Item-Page',
    templateUrl: 'item.html'
})
export class ItemPage implements OnInit{
  countBanana: number;
  countMilkCartons: number;
  countApples: number;
  itemCount: number;
  
  constructor(private navCtrl:NavController){

  }

  ngOnInit(){
    this.clearAll();
  }

  clearAll(){
    this.countApples = 0;
    this.countBanana = 0;
    this.countMilkCartons = 0;
  }

  generateBill(){
    var count = {
       banana: this.countBanana,
       apple: this.countApples,
       milk: this.countMilkCartons
    };
    this.navCtrl.push(BuyoutPage,count);  
  }
}