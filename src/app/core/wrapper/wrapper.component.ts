import { WIDGET } from './../tokens/widget.token';
import { Component, OnInit, ContentChild } from '@angular/core';
import { Widget } from '../interfaces/widget.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;
  loading: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.widget) {
      this.widget.load();
    }
  }

  refresh(){
   this.widget.refresh();
  }
}
