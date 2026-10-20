import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { cartReducer } from '../../store/cart';
import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComponent],
      providers: [
        provideRouter([]),
        provideStore({ cart: cartReducer }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário como inválido', () => {
    expect(component.checkoutForm.valid).toBeFalsy();
  });

  it('deve invalidar quando o e-mail não estiver no formato correto', () => {
    const emailControl = component.checkoutForm.get('email');
    emailControl?.setValue('email-invalido');
    expect(emailControl?.valid).toBeFalsy();

    emailControl?.setValue('teste@email.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('deve invalidar quando o CEP não seguir o padrão', () => {
    const cepControl = component.checkoutForm.get('cep');
    cepControl?.setValue('123');
    expect(cepControl?.valid).toBeFalsy();

    cepControl?.setValue('01001-000');
    expect(cepControl?.valid).toBeTruthy();
  });

  it('deve validar o formulário quando todos os campos obrigatórios forem preenchidos', () => {
    component.checkoutForm.setValue({
      nome: 'Maria Silva',
      email: 'maria@example.com',
      cep: '12345-678',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      pagamento: 'pix',
    });

    expect(component.checkoutForm.valid).toBeTruthy();
  });

  it('deve finalizar o pedido com sucesso quando o formulário for válido', () => {
    component.checkoutForm.setValue({
      nome: 'Maria Silva',
      email: 'maria@example.com',
      cep: '12345-678',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      pagamento: 'cartao',
    });

    component.finalizarPedido();

    expect(component.pedidoConcluido()).toBeTruthy();
  });

  it('não deve finalizar o pedido se o formulário for inválido', () => {
    component.finalizarPedido();

    expect(component.pedidoConcluido()).toBeFalsy();
    expect(component.checkoutForm.touched).toBeTruthy();
  });
});
