import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDialogProdutoComponent } from './component-dialog-produto.component';

describe('ComponentDialogProdutoComponent', () => {
  let component: ComponentDialogProdutoComponent;
  let fixture: ComponentFixture<ComponentDialogProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDialogProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentDialogProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
