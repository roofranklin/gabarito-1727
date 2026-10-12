import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/cart';
import { Product, Produto } from '../../services/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos implements OnInit {
  produtos: Produto[] = [];
  carregando: boolean = true;

  constructor(
    private productService: Product,
    private cartService: Cart,
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    // Simulação do carregamento da vitrine
    this.produtos = this.productService.produtos;
    this.carregando = false;
  }

  receberProduto(produto: any) {
    console.log('Produto adicionado:', produto?.title);
    this.cartService.adicionar(produto);
  }
}
