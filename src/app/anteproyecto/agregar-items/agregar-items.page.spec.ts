import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarItemsPage } from './agregar-items.page';

describe('AgregarItemsPage', () => {
  let component: AgregarItemsPage;
  let fixture: ComponentFixture<AgregarItemsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
