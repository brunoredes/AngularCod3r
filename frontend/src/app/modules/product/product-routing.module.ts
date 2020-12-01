import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
