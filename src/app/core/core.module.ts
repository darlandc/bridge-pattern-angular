import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ReactiveCharactersComponent } from './components/reactive-characters/reactive-characters.component';

@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent,
    CharactersComponent,
    ReactiveCharactersComponent
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent,
    CharactersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class CoreModule {}
