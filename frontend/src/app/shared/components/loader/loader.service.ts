import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LoaderService {

  public isLoading = new Subject<boolean>();

  public show() {
    this.isLoading.next(true);
  }

  public hide() {
    this.isLoading.next(false);
  }

  constructor() { }
}
