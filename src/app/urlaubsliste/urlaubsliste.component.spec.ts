import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlaubslisteComponent } from './urlaubsliste.component';

describe('UrlaubslisteComponent', () => {
  let component: UrlaubslisteComponent;
  let fixture: ComponentFixture<UrlaubslisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlaubslisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlaubslisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});