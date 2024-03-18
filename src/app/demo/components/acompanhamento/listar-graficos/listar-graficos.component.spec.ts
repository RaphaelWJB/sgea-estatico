import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGraficosComponent } from './listar-graficos.component';

describe('ListarGraficosComponent', () => {
  let component: ListarGraficosComponent;
  let fixture: ComponentFixture<ListarGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarGraficosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
