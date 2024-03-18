import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaFaturaComponent } from './nova-fatura.component';

describe('NovaFaturaComponent', () => {
  let component: NovaFaturaComponent;
  let fixture: ComponentFixture<NovaFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaFaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
