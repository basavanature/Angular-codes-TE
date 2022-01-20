import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMComponentComponent } from './fm-component.component';

describe('FMComponentComponent', () => {
  let component: FMComponentComponent;
  let fixture: ComponentFixture<FMComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FMComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FMComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
