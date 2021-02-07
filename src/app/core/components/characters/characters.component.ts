import { CharacteresService } from './../../services/characteres.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WIDGET } from './../../tokens/widget.token';
import { Widget } from './../../interfaces/widget.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: CharactersComponent
    }
  ]
})
export class CharactersComponent implements Widget {
  res: any;
  err: HttpErrorResponse;
  id: number;
  image: any;
  name: any;
  loading: any;
  loaded: any;

  constructor(private service: CharacteresService) {}

  load() {
    this.getList();
  }
  refresh() {
    this.getList();
  }

  getList() {
    this.loading = true;
    this.id = Math.floor(Math.random() * 244);
    this.service.getCharacters(`${this.id}`).subscribe(
      res => {
        this.res = res;
        this.image = res.image;
        this.name = res.name;
      },
      err => {
        this.err = err;
      },
      ()=> {
        this.loading = false;
      }
    );
  }

}
