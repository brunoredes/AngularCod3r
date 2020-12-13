import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackMessageService } from '../../../../shared/services/snackMessage.service';
import { ProductService } from '../../product.service';
import { Product } from '../../../../core/models/product';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  private _destroy: ReplaySubject<any> = new ReplaySubject<any>();

  @Input() product: Product = {} as Product;
  // public product: Product = {
  //   name: '',
  //   price: null
  // } as Product;

  public createForm;

  constructor(
    private _snack: SnackMessageService,
    private _router: Router,
    private _productService: ProductService,
  ) { }


  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl(this.product.name, [
        Validators.requiredTrue,
        Validators.minLength(6)
      ]),
      price: new FormControl(this.product.price, [
        Validators.requiredTrue,
        Validators.pattern('[0-9]{1, },[0-9]{2}')
      ])
    });
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
