import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackMessageService } from '../../../../shared/services/snackMessage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _snack: SnackMessageService, private _router: Router) { }

  ngOnInit(): void {
  }

  public createProduct(): void {
    this._snack.showMessage('Produto Criado');
  }

  public cancel(): void {
    this._router.navigate(['/products'])
  }
}
