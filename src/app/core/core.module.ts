import { MaterialModule } from './../material.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './widgets/login/login.component';
import { CommonModule } from '@angular/common';
import { ProductMenuComponent } from './widgets/product-menu/product-menu.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CharactersComponent } from './widgets/characters/characters.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveCharactersComponent } from './widgets/reactive-characters/reactive-characters.component';

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
