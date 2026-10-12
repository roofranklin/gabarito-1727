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
    this.productService.obterProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos:', erro);
        this.carregando = false;
      },
    });
  }

  receberProduto(produto: any) {
    console.log('Produto adicionado:', produto?.title);
    this.cartService.adicionar(produto);
  }
}
