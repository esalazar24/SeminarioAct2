import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudyPage } from './estudy.page';

describe('EstudyPage', () => {
  let component: EstudyPage;
  let fixture: ComponentFixture<EstudyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
