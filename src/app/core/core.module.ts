import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './widgets/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMenuComponent } from './widgets/product-menu/product-menu.component';

@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent
  ],
  imports: [ CommonModule ],
  exports: [
    WrapperComponent,
    LoginComponent,
    ProductMenuComponent
  ],
  providers: [

  ],
})
export class CoreModule {}
