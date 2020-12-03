import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'any'
})
export class SnackMessageService {

  constructor(private _snack: MatSnackBar) { }

  public showMessage(msg: string, isError: boolean = false): void {
    this._snack.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
