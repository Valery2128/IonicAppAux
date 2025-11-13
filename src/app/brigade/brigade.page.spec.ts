import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrigadePage } from './brigade.page';

describe('BrigadePage', () => {
  let component: BrigadePage;
  let fixture: ComponentFixture<BrigadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
