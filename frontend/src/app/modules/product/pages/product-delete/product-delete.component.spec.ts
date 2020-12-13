import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { SnackMessageService } from '../../../../shared/services/snackMessage.service';
import { ProductDeleteComponent } from './product-delete.component';

describe('ProductDeleteComponent', () => {
  let component: ProductDeleteComponent;
  let fixture: ComponentFixture<ProductDeleteComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } }
    });
    const productServiceStub = () => ({
      readById: id => ({ subscribe: f => f({}) }),
      delete: id => ({ subscribe: f => f({}) })
    });
    const snackMessageServiceStub = () => ({ showMessage: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductDeleteComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: ProductService, useFactory: productServiceStub },
        { provide: SnackMessageService, useFactory: snackMessageServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ProductDeleteComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const productServiceStub: ProductService = fixture.debugElement.injector.get(
        ProductService
      );
      spyOn(productServiceStub, 'readById').and.callThrough();
      component.ngOnInit();
      expect(productServiceStub.readById).toHaveBeenCalled();
    });
  });

  describe('deleteProduct', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const productServiceStub: ProductService = fixture.debugElement.injector.get(
        ProductService
      );
      const snackMessageServiceStub: SnackMessageService = fixture.debugElement.injector.get(
        SnackMessageService
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(productServiceStub, 'delete').and.callThrough();
      spyOn(snackMessageServiceStub, 'showMessage').and.callThrough();
      component.deleteProduct();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(productServiceStub.delete).toHaveBeenCalled();
      expect(snackMessageServiceStub.showMessage).toHaveBeenCalled();
    });
  });
});
