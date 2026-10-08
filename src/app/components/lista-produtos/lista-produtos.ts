import { Component } from '@angular/core';
import { Product, Produto } from '../../services/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos {
  produtos: Produto[] = [];

  constructor(private productService: Product) {
    this.produtos = this.productService.produtos;
  }
}
