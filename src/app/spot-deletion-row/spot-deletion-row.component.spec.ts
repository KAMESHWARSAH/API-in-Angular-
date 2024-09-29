import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotDeletionRowComponent } from './spot-deletion-row.component';

describe('SpotDeletionRowComponent', () => {
  let component: SpotDeletionRowComponent;
  let fixture: ComponentFixture<SpotDeletionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotDeletionRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotDeletionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
