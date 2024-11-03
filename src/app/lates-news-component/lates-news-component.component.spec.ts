import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesNewsComponentComponent } from './lates-news-component.component';

describe('LatesNewsComponentComponent', () => {
  let component: LatesNewsComponentComponent;
  let fixture: ComponentFixture<LatesNewsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatesNewsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatesNewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
