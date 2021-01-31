import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAntragComponent } from './edit-antrag.component';

describe('EditAntragComponent', () => {
  let component: EditAntragComponent;
  let fixture: ComponentFixture<EditAntragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAntragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAntragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});