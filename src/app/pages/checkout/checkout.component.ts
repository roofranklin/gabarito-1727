import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearCart, selectItensCarrinho, selectQuantidadeItens } from '../../store/cart';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  // Lendo dados do cofre (NgRx)
  quantidade = this.store.selectSignal(selectQuantidadeItens);
  itens = this.store.selectSignal(selectItensCarrinho);

  pedidoConcluido = signal(false);

  // Formulário Reativo com validações
  checkoutForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
    endereco: ['', [Validators.required, Validators.minLength(5)]],
    cidade: ['', [Validators.required]],
    pagamento: ['cartao', [Validators.required]],
  });

  // Método auxiliar para facilitar checagem de erros no template
  isCampoInvalido(campo: string): boolean {
    const controle = this.checkoutForm.get(campo);
    return !!(controle && controle.invalid && (controle.dirty || controle.touched));
  }

  finalizarPedido(): void {
    if (this.checkoutForm.invalid) {
      // Marca todos os campos como tocados para exibir os erros na tela
      this.checkoutForm.markAllAsTouched();
      return;
    }

    // Processa o pedido com sucesso
    this.pedidoConcluido.set(true);

    // Esvazia o cofre Redux
    this.store.dispatch(clearCart());

    // Reseta o formulário
    this.checkoutForm.reset({
      pagamento: 'cartao',
    });
  }
}
