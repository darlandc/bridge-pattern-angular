import { MaterialModule } from './../material.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './widgets/login/login.component';
import { CommonModule } from '@angular/common';
import { ProductMenuComponent } from './widgets/product-menu/product-menu.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CharactersComponent } from './widgets/characters/characters.component';

@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent,
    CharactersComponent
  ],
  imports: [ CommonModule, MaterialModule ],
  exports: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent,
    CharactersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class CoreModule {}
