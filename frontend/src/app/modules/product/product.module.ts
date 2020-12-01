import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { ReadTableExampleComponent } from './read-table-example/read-table-example.component';
import localePt from '@angular/common/locales/pt';
import { UpdateComponent } from './pages/update/update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [ProductComponent, CreateComponent, ReadComponent, ReadTableExampleComponent, UpdateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
export class ProductModule { }
