import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntragdetailsComponent } from './antragdetails.component';

describe('AntragdetailsComponent', () => {
  let component: AntragdetailsComponent;
  let fixture: ComponentFixture<AntragdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntragdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntragdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
