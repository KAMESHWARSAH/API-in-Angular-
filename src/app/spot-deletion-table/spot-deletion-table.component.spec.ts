import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotDeletionTableComponent } from './spot-deletion-table.component';

describe('SpotDeletionTableComponent', () => {
  let component: SpotDeletionTableComponent;
  let fixture: ComponentFixture<SpotDeletionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotDeletionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotDeletionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
