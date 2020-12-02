import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cancel-button',
  templateUrl: './product-cancel-button.component.html',
  styleUrls: ['./product-cancel-button.component.css']
})
export class ProductCancelButtonComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public cancel(): void {
    this._router.navigate(['/products']);
  }

}
