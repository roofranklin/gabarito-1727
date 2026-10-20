import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { cartReducer } from '../../store/cart';
import { Cabecalho } from './cabecalho';

describe('Cabecalho', () => {
  let component: Cabecalho;
  let fixture: ComponentFixture<Cabecalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabecalho],
      providers: [
        provideRouter([]),
        provideStore({ cart: cartReducer }),
      ],
    }).compileComponents();


    fixture = TestBed.createComponent(Cabecalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

