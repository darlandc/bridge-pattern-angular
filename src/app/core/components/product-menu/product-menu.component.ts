import { Widget } from './../../interfaces/widget.interface';
import { WIDGET } from './../../tokens/widget.token';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: ProductMenuComponent
    }
  ]
})

export class ProductMenuComponent implements Widget {

  load(){
    console.log(`loading product menu`)
  }

  refresh(){
    console.log(`refreshing product menu`)
  }

}
