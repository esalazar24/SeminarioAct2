import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedireccionPage } from './redireccion.page';

describe('RedireccionPage', () => {
  let component: RedireccionPage;
  let fixture: ComponentFixture<RedireccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RedireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
