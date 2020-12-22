import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAntraegeComponent } from './list-antraege.component';

describe('ListAntraegeComponent', () => {
  let component: ListAntraegeComponent;
  let fixture: ComponentFixture<ListAntraegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAntraegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAntraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
