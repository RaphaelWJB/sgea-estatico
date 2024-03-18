import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDialogColaboradorComponent } from './component-dialog-colaborador.component';

describe('ComponentDialogColaboradorComponent', () => {
  let component: ComponentDialogColaboradorComponent;
  let fixture: ComponentFixture<ComponentDialogColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDialogColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentDialogColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
