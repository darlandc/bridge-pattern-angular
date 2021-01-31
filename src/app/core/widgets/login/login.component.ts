import { Widget } from './../../interfaces/widget.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements Widget {

  constructor() { }

  ngOnInit(): void {
  }


  load(){
    debugger
  }

  refresh(){
    debugger
  }

}
