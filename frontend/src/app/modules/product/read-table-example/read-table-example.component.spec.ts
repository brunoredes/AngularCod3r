import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReadTableExampleComponent } from './read-table-example.component';

describe('ReadTableExampleComponent', () => {
  let component: ReadTableExampleComponent;
  let fixture: ComponentFixture<ReadTableExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ReadTableExampleComponent]
    });
    fixture = TestBed.createComponent(ReadTableExampleComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`displayedColumns has default value`, () => {
    expect(component.displayedColumns).toEqual([`id`, `name`]);
  });
});
