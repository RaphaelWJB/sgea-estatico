import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDialogClienteComponent } from './component-dialog-cliente.component';

describe('ComponentDialogClienteComponent', () => {
  let component: ComponentDialogClienteComponent;
  let fixture: ComponentFixture<ComponentDialogClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDialogClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentDialogClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
