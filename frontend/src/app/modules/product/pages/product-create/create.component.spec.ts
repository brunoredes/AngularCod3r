import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Product } from '../../../../core/models/product';
import { CreateComponent } from './create.component';

test('CreateComponentTest', () => {
  expect(CreateComponent).toBeTruthy();
})
