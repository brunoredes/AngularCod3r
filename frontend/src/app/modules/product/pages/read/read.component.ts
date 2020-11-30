import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { ProductService } from '../../product.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, OnDestroy {

  public products: Product[];
  public displayedColumns = ['id', 'name', 'price'];
  private _subscription: SubscriptionLike[] = []

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._subscription.push(this._productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    }));
  }

  ngOnDestroy(): void {
    for (const subscription of this._subscription) {
      subscription.unsubscribe();
    }
  }

}
