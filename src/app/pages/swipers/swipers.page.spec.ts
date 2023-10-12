import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwipersPage } from './swipers.page';

describe('SwipersPage', () => {
  let component: SwipersPage;
  let fixture: ComponentFixture<SwipersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwipersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
