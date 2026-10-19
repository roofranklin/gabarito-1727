import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product, Produto } from '../../services/product';
import { adicionarProduto } from '../../store/cart';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css',
})
export class ProdutoDetalheComponent implements OnInit {
  // DICA DO BÔNUS: Injetamos o ActivatedRoute para acessar parâmetros da rota ativa
  private route = inject(ActivatedRoute);
  private productService = inject(Product);
  private store = inject(Store);

  produto = signal<Produto | null>(null);
  carregando = signal<boolean>(true);
  erro = signal<string | null>(null);
  adicionado = signal<boolean>(false);

  ngOnInit(): void {
    // Lendo o parâmetro :id definido na rota /produto/:id
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.carregarProduto(id);
    } else {
      this.erro.set('Identificador do produto não encontrado.');
      this.carregando.set(false);
    }
  }

  carregarProduto(id: string): void {
    this.carregando.set(true);
    this.productService.obterProdutoPorId(id).subscribe({
      next: (dados) => {
        this.produto.set(dados);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set('Não foi possível carregar os detalhes do produto.');
        this.carregando.set(false);
      },
    });
  }

  adicionarAoCarrinho(): void {
    const prod = this.produto();
    if (prod) {
      this.store.dispatch(adicionarProduto({ produto: prod }));
      this.adicionado.set(true);
      setTimeout(() => this.adicionado.set(false), 2000);
    }
  }
}
