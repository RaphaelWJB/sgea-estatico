import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoColaboradorComponent } from './novo-colaborador.component';

describe('NovoColaboradorComponent', () => {
  let component: NovoColaboradorComponent;
  let fixture: ComponentFixture<NovoColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoColaboradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
