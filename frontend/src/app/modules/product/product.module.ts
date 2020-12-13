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
import { MatDialogModule } from '@angular/material/dialog';
import localePt from '@angular/common/locales/pt';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product.component';
import { CreateComponent } from './pages/product-create/create.component';
import { ReadComponent } from './pages/product-read/read.component';
import { ReadTableExampleComponent } from './read-table-example/read-table-example.component';
import { UpdateComponent } from './pages/product-update/update.component';
import { ProductCancelButtonComponent } from './shared/product-cancel-button/product-cancel-button.component';
import { ProductDeleteComponent } from './pages/product-delete/product-delete.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    ProductComponent,
    CreateComponent,
    ReadComponent,
    ReadTableExampleComponent,
    UpdateComponent,
    ProductCancelButtonComponent,
    ProductDeleteComponent
  ],
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
    MatDialogModule,
    LoaderModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
export class ProductModule { }
