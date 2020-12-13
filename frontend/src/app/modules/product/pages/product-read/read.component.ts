import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { ProductService } from '../../product.service';
import { SubscriptionLike } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, OnDestroy {

  public products: Product[];
  public product: Product;
  public displayedColumns = ['id', 'name', 'price', 'action'];
  private _subscription: SubscriptionLike[] = [];

  constructor(
    private _productService: ProductService,
    private _dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this._subscription.push(this._productService.read().subscribe((products) => {
      this.products = products;
    }));
  }

  ngOnDestroy(): void {
    for (const subscription of this._subscription) {
      subscription.unsubscribe();
    }
  }

  openDeleteModal(): void {
    this._dialog.open(ProductDeleteComponent, {
      data: {
        name: this.product?.name,
        price: this.product?.price
      }
    });
  }

}
