import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearCart, selectQuantidadeItens } from '../../store/cart';

@Component({
  imports: [RouterLink],
  selector: 'app-cabecalho',
  styleUrl: './cabecalho.css',
  templateUrl: './cabecalho.html',
})

export class Cabecalho {
  private store = inject(Store);

  // LENDO O COFRE: usando selectSignal para conectar o seletor ao template via Signal
  quantidade = this.store.selectSignal(selectQuantidadeItens);

  // O DISPATCH: disparando a ação para esvaziar o cofre
  esvaziarCarrinho() {
    this.store.dispatch(clearCart());
  }
}


