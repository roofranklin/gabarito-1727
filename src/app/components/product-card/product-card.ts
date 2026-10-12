import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { Produto } from '../../services/product';

@Component({
  imports: [CurrencyPipe, UpperCasePipe, TruncatePipe, DiscountPipe],
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
