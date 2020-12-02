import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { SnackMessageService } from 'src/app/shared/services/snackMessage.service';
import { ProductService } from '../../product.service';
import { ProductCancelButtonComponent } from '../../shared/product-cancel-button/product-cancel-button.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {

  public product: Product;
  private _subscription: SubscriptionLike[] = [];

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _snack: SnackMessageService,
  ) { }


  ngOnInit(): void {
    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._subscription.push(
      this._productService.readById(id).subscribe((product) => {
        this.product = product;
      })
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this._subscription) {
      subscription.unsubscribe();
    }
  }

  public updateProduct(): void {
    try {
      this._subscription.push(this._productService
        .update(this.product)
        .subscribe(() => {
          this._snack.showMessage('Produto atualizado com sucesso');
          this._router.navigate(['/products']);
        }));
    } catch (err) {
      this._snack.showMessage('Ocorreu um erro ao atualizar o produto.');
    }
  }

}
