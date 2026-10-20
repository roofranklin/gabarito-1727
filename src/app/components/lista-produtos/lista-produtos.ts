import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, Produto } from '../../services/product';
import { adicionarProduto } from '../../store/cart';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos implements OnInit {
  produtos = signal<Produto[]>([]);
  carregando = signal<boolean>(true);

  constructor(
    private productService: Product,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.productService.obterProdutos().subscribe((dados) => {
      this.produtos.set(dados);
      this.carregando.set(false);
    });
  }

  receberProduto(produto: Produto) {
    console.log('Produto adicionado:', produto?.title);
    // DISPATCH: enviando a ação para a Store processar via Reducer
    this.store.dispatch(adicionarProduto({ produto }));
  }
}

