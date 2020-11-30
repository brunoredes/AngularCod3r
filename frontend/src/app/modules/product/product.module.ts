import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [ProductComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule
  ],
  providers: []
})
export class ProductModule { }
