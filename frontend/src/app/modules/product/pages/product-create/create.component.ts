import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackMessageService } from '../../../../shared/services/snackMessage.service';
import { ProductService } from '../../product.service';
import { Product } from '../../../../core/models/product';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  private _destroy: ReplaySubject<any> = new ReplaySubject<any>();

  constructor(
    private _snack: SnackMessageService,
    private _router: Router,
    private _productService: ProductService,
  ) { }


  public product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destroy.next(null);
  }

  public createProduct(): void {
    try {
      this._productService.create(this.product)
        .pipe(takeUntil(this._destroy))
        .subscribe(() => {
          this._snack.showMessage('Produto Criado');
          this._router.navigate(['/products']);
        });
    } catch (err) {
      this._snack.showMessage(err);
      console.error(err);
    }
  }

}
