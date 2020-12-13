import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../../core/models/product';
import { ProductService } from '../../product.service';
import { SnackMessageService } from '../../../../shared/services/snackMessage.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  public product: Product = {} as Product;

  constructor(
    private _productService: ProductService,
    private _snack: SnackMessageService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this._productService.delete(this.product?.id).subscribe(() => {
      this._snack.showMessage('Produto Excluído');
      this._router.navigate(['/products']);
    });
  }

}
