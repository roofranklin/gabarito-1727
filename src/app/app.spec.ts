import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
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
});
