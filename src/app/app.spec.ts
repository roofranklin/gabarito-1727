import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Router } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { cartReducer } from './store/cart';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClient(),
        provideRouter(routes),
        provideStore({ cart: cartReducer }),
      ],
    })
      .compileComponents();

    const router = TestBed.inject(Router);
    await router.initialNavigation();
  });



  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Minha Loja');
  });

  it('should update cart count in header when item is added', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const button = compiled.querySelector('.btn-comprar') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();

    await fixture.whenStable();
    fixture.detectChanges();

    const carrinho = compiled.querySelector('.carrinho');
    expect(carrinho?.textContent).toContain('Carrinho: 1 itens');
  });

  it('should clear cart count in header when esvaziar button is clicked', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const buttonComprar = compiled.querySelector('.btn-comprar') as HTMLButtonElement;
    expect(buttonComprar).toBeTruthy();
    buttonComprar.click();

    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('.carrinho')?.textContent).toContain('Carrinho: 1 itens');

    const buttonEsvaziar = compiled.querySelector('.btn-danger') as HTMLButtonElement;
    expect(buttonEsvaziar).toBeTruthy();
    buttonEsvaziar.click();

    await fixture.whenStable();
    fixture.detectChanges();

    expect(compiled.querySelector('.carrinho')).toBeNull();
  });
});

