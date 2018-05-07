import { CheckoutPage } from './../checkout/checkout';
import { NavParams, NavController } from 'ionic-angular';
import { Component, OnInit} from '@angular/core';
@Component({
    selector: 'Buy-Page',
    templateUrl: 'buyout.html'
})


export class BuyoutPage implements OnInit{
   items :{
      id : number,
      name:string,
      qty:number,
      price:number,
      Tprice:number
   } [] = [];
   total = 0;
    price = {
       'banana' : 4,
       'apple' : 6,
       'milk': 15
   }
   constructor(private navCtrl: NavController,private navParams : NavParams){
         
   }

   ngOnInit(){
       let i = 1;
       for (var key of Object.keys(this.navParams.data)) {
           if (this.navParams.data[key] > 0 ){
            this.items.push({
                id: i++,   
                name: key.toUpperCase(),
                qty: this.navParams.data[key],
                price: this.price[key],
                Tprice: this.price[key] * this.navParams.data[key]
            });
               this.total += this.price[key] * this.navParams.data[key];
            
         }
       }
   }

   checkout(){
       this.navCtrl.push(CheckoutPage);
   }

   goBack(){
       this.navCtrl.pop();
   }
}