import { WIDGET } from './../tokens/widget.token';
import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { LoginComponent } from '../widgets/login/login.component';
import { Widget } from '../interfaces/widget.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;
  isRefreshing: boolean;
  state: Object;
  initialState: Object;

  constructor() {}

  ngOnInit(): void {
    if (this.widget) {
      this.widget.load();
    }
  }

  refresh(){
   this.widget.refresh();
   this.isRefreshing = true;
   setTimeout(() => {
     this.isRefreshing = false;
   }, 300);
  }
}
