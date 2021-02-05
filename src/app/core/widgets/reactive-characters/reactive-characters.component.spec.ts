import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCharactersComponent } from './reactive-characters.component';

describe('ReactiveCharactersComponent', () => {
  let component: ReactiveCharactersComponent;
  let fixture: ComponentFixture<ReactiveCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
