import { Component, Input } from '@angular/core';
import { Produto } from '../../services/product';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() produto?: Produto;
}
