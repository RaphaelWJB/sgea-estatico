import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFaturaComponent } from './listar-fatura.component';

describe('ListarFaturaComponent', () => {
  let component: ListarFaturaComponent;
  let fixture: ComponentFixture<ListarFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
