import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../services/product';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() produtoRecebido?: Produto;
  @Output() adicionar = new EventEmitter<any>();

  // Suporte retrocompatível para [produto]
  @Input() set produto(val: Produto | undefined) {
    this.produtoRecebido = val;
  }

  clicouComprar() {
    this.adicionar.emit(this.produtoRecebido);
  }
}
