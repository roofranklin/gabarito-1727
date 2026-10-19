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

  it('deve invalidar quando o número do cartão não tiver exatamente 16 dígitos', () => {
    const cartaoControl = component.checkoutForm.get('numeroCartao');
    cartaoControl?.setValue('12345');
    expect(cartaoControl?.valid).toBeFalsy();

    cartaoControl?.setValue('12345678901234567'); // 17 dígitos
    expect(cartaoControl?.valid).toBeFalsy();

    cartaoControl?.setValue('1234567890123456'); // 16 dígitos
    expect(cartaoControl?.valid).toBeTruthy();
  });

  it('deve invalidar quando o código de segurança não tiver exatamente 3 dígitos', () => {
    const cvvControl = component.checkoutForm.get('codigoSeguranca');
    cvvControl?.setValue('12');
    expect(cvvControl?.valid).toBeFalsy();

    cvvControl?.setValue('1234');
    expect(cvvControl?.valid).toBeFalsy();

    cvvControl?.setValue('123');
    expect(cvvControl?.valid).toBeTruthy();
  });

  it('deve validar o formulário quando todos os campos obrigatórios forem preenchidos', () => {
    component.checkoutForm.setValue({
      nome: 'Maria Silva',
      email: 'maria@example.com',
      cep: '12345-678',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      pagamento: 'cartao',
      numeroCartao: '1234567890123456',
      codigoSeguranca: '123',
    });

    expect(component.checkoutForm.valid).toBeTruthy();
  });

  it('deve finalizar o pedido com sucesso e exibir "Pedido finalizado" quando o formulário for válido', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    component.checkoutForm.setValue({
      nome: 'Maria Silva',
      email: 'maria@example.com',
      cep: '12345-678',
      endereco: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      pagamento: 'cartao',
      numeroCartao: '1234567890123456',
      codigoSeguranca: '123',
    });

    component.finalizarPedido();

    expect(component.pedidoConcluido()).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido finalizado');
  });

  it('não deve finalizar o pedido nem emitir log se o formulário for inválido', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    component.finalizarPedido();

    expect(component.pedidoConcluido()).toBeFalsy();
    expect(component.checkoutForm.touched).toBeTruthy();
    expect(consoleSpy).not.toHaveBeenCalledWith('Pedido finalizado');
  });
});

