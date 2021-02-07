import { WIDGET } from './../../tokens/widget.token';
import { Widget } from './../../interfaces/widget.interface';
import { Component } from '@angular/core';
import { CharacteresService } from '../../services/characteres.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-characters',
  templateUrl: './reactive-characters.component.html',
  styleUrls: ['./reactive-characters.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: ReactiveCharactersComponent
    }
  ]
})
export class ReactiveCharactersComponent implements Widget {

  list = Array.from({ length: 10 }, (_, i) => i + 1);
  form = new FormControl();
  readonly character$ = this.service.character$;

  private subSink = new Subscription();

  constructor(private service: CharacteresService) {
    console.log(12312312)
  }
  load() {
    this.sinc();
  }

  refresh() {
    this.sinc();
  }

  sinc() {
    this.subSink.add(
      this.form.valueChanges.subscribe(v => this.loadCharacter(v))
    );
  }

  // ngOnDestroy() {
  //   this.subSink.unsubscribe();
  // }

  private loadCharacter(id: string) {
    this.service.loadCharacter(id);
  }
}
