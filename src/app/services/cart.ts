import { Service } from '@angular/core';

@Service()
export class Cart {
  itens: any[] = [];

  adicionar(produto: any) {
    this.itens.push(produto);
  }

  obterQuantidade(): number {
    return this.itens.length;
  }
}

export { Cart as CartService };
