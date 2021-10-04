import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductsListComponent } from './top-products-list.component';

describe('TopProductsListComponent', () => {
  let component: TopProductsListComponent;
  let fixture: ComponentFixture<TopProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
