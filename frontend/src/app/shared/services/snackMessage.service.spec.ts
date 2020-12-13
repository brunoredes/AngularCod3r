import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackMessageService } from './snackMessage.service';

describe('SnackMessageService', () => {
  let service: SnackMessageService;

  beforeEach(() => {
    const matSnackBarStub = () => ({ open: (msg, string, object) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        SnackMessageService,
        { provide: MatSnackBar, useFactory: matSnackBarStub }
      ]
    });
    service = TestBed.inject(SnackMessageService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
