import { MaterialModule } from './../material.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './widgets/login/login.component';
import { CommonModule } from '@angular/common';
import { ProductMenuComponent } from './widgets/product-menu/product-menu.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent
  ],
  imports: [ CommonModule, MaterialModule ],
  exports: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class CoreModule {}
