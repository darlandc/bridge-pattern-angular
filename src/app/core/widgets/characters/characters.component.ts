import { CharacteresService } from './../../services/characteres.service';
import { Component } from '@angular/core';
import { WIDGET } from './../../tokens/widget.token';
import { Widget } from './../../interfaces/widget.interface';

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

  constructor(private service: CharacteresService) {
    this.service.getCharacters().subscribe(
      res => {
        this.res = res;


      },
      err => {
        console.log(`------------ ${err}`);
      },
      ()=> {
        debugger
      }
    );
  }
  load() {
  }

  refresh() {
    console.log(`--- CharactersComponent`);
  }
}


export interface ICharacter {
created: string;
episode: Array<[]>;
gender: string;
id: number;
image: string;
location: {
  name: string,
  url: string
};
name: string;
origin: {
  name: string,
  url: string
};
species: string;
status: string;
type: string;
url: string;
}
