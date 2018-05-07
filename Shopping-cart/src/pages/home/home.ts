import { ItemPage } from './../shopping-cart-pages/item/item';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, 
              private platform:Platform) {

  }

  onLaunchPage(){
    this.navCtrl.push(ItemPage);
  }

  onExit(){
    console.log("Existing");
    //Add alert here
    this.platform.exitApp();
  }
}
