import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Product } from '../../core/models/product';
import { SnackMessageService } from 'src/app/shared/services/snackMessage.service';
import { ProductService } from './product.service';
import { ProductComponent } from './components/product.component';

describe('ProductService', () => {
  let service: ProductService;
  let component: ProductComponent

  beforeEach(() => {
    const snackMessageServiceStub = () => ({
      showMessage: (string, arg) => ({})
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: SnackMessageService, useFactory: snackMessageServiceStub }
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const productStub: Product = <any>{};
      spyOn(component, 'navigateToProductCreate').and.callThrough();
      service.create(productStub).subscribe(res => {
        expect(res).toEqual(productStub);
      });
      expect(service.errorHandler).toHaveBeenCalled();
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('POST');
      req.flush(productStub);
      httpTestingController.verify();
    });
  });

  describe('update', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const productStub: Product = <any>{};
      spyOn(component, 'navigateToProductCreate').and.callThrough();
      service.update(productStub).subscribe(res => {
        expect(res).toEqual(productStub);
      });
      expect(service.errorHandler).toHaveBeenCalled();
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('PUT');
      req.flush(productStub);
      httpTestingController.verify();
    });
  });

  describe('read', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      spyOn(component, 'navigateToProductCreate').and.callThrough();
      service.read().subscribe(res => {
        expect(res).toEqual([]);
      });
      expect(service.errorHandler).toHaveBeenCalled();
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
