import { WIDGET } from './../../tokens/widget.token';
import { Widget } from './../../interfaces/widget.interface';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: LoginComponent
    }
  ]
})
export class LoginComponent implements Widget {

  load(){
    console.log(`loading login`)
  }

  refresh(){
    console.log(`refreshing login`)
  }

}
