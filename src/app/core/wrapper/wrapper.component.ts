import { WIDGET } from './../tokens/widget.token';
import { Component, OnInit, ContentChild } from '@angular/core';
import { LoginComponent } from '../widgets/login/login.component';
import { Widget } from '../interfaces/widget.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: LoginComponent
    },

  ]
})
export class WrapperComponent implements OnInit {

  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;

  constructor() {}

  ngOnInit(): void {
    if (this.widget) {
      this.widget.load();
    }
  }

  refresh(){
   // this.widget.refresh();
  }
}
