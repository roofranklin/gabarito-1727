import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectQuantidadeItens } from '../../store/cart';

@Component({
  imports: [],
  selector: 'app-cabecalho',
  styleUrl: './cabecalho.css',
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
  private store = inject(Store);

  // LENDO O COFRE: usando selectSignal para conectar o seletor ao template via Signal
  quantidade = this.store.selectSignal(selectQuantidadeItens);
}

