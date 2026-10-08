import { Component } from '@angular/core';
import { Cart } from '../../services/cart';
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

  constructor(
    private productService: Product,
    private cartService: Cart,
  ) {
    this.produtos = this.productService.produtos;
  }

  receberProduto(produto: any) {
    console.log('Produto adicionado:', produto?.title);
    this.cartService.adicionar(produto);
  }
}
