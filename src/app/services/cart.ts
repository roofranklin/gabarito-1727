import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  itens = signal<any[]>([]);

  adicionar(produto: any) {
    this.itens.update((itens) => [...itens, produto]);
  }

  obterQuantidade(): number {
    return this.itens().length;
  }
}

export { Cart as CartService };
