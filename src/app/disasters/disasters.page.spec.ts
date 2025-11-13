import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisastersPage } from './disasters.page';

describe('DisastersPage', () => {
  let component: DisastersPage;
  let fixture: ComponentFixture<DisastersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
