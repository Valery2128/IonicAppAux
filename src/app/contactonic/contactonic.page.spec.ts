import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactonicPage } from './contactonic.page';

describe('ContactonicPage', () => {
  let component: ContactonicPage;
  let fixture: ComponentFixture<ContactonicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
