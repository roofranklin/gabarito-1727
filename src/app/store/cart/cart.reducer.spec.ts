import { Produto } from '../../services/product';
import { adicionarProduto, clearCart } from './cart.actions';
import { cartReducer, initialCartState } from './cart.reducer';
import { selectQuantidadeItens } from './cart.selectors';

describe('Redux Cart (Aula 05)', () => {
  const produtoMock: Produto = {
    id: 1,
    title: 'Mochila',
    price: 100,
    description: 'Mochila resistente',
    category: 'acessorios',
    image: 'mochila.jpg',
  };

  it('deve retornar o estado inicial por padrão', () => {
    const action = { type: 'NOOP' } as any;
    const state = cartReducer(undefined, action);

    expect(state).toEqual(initialCartState);
    expect(state.itens.length).toBe(0);
  });

  it('deve adicionar um produto ao carrinho quando a ação adicionarProduto for disparada', () => {
    const action = adicionarProduto({ produto: produtoMock });
    const state = cartReducer(initialCartState, action);

    expect(state.itens.length).toBe(1);
    expect(state.itens[0]).toEqual(produtoMock);
  });

  it('deve esvaziar o carrinho quando a ação clearCart for disparada', () => {
    const estadoComItens = {
      itens: [produtoMock, { ...produtoMock, id: 2, title: 'Camiseta' }],
    };

    const action = clearCart();
    const state = cartReducer(estadoComItens, action);

    expect(state.itens.length).toBe(0);
    expect(state.itens).toEqual([]);
  });

  it('deve calcular corretamente a quantidade de itens via seletor', () => {
    const state = {
      cart: {
        itens: [produtoMock, { ...produtoMock, id: 2, title: 'Camiseta' }],
      },
    };

    const quantidade = selectQuantidadeItens(state);
    expect(quantidade).toBe(2);
  });
});

