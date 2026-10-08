import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class Product {
  produtos: Produto[] = [
    {
      id: 1,
      title: 'Mochila Foldsack No. 1',
      price: 109.95,
      description: 'Mochila perfeita para uso diário e passeios.',
      category: 'acessorios',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Camiseta Masculina Slim Fit',
      price: 22.3,
      description: 'Estilo slim fit, tecido confortável e leve.',
      category: 'roupas',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 3,
      title: 'Jaqueta Algodão Masculina',
      price: 55.99,
      description: 'Ótima jaqueta para outono e inverno.',
      category: 'roupas',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 4,
      title: 'Camisa Casual Manga Longa',
      price: 15.99,
      description: 'Camisa casual elegante e confortável.',
      category: 'roupas',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
  ];
}
