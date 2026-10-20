import { createReducer, on } from '@ngrx/store';
import { Produto } from '../../services/product';
import { adicionarProduto } from './cart.actions';

/**
 * ESTADO (State)
 * Define o formato dos dados guardados no cofre (Store) para o carrinho.
 */
export interface CartState {
  itens: Produto[];
}

/**
 * ESTADO INICIAL
 * Como o carrinho começa quando a aplicação é aberta.
 */
export const initialCartState: CartState = {
  itens: [],
};

/**
 * REDUCER
 * Função pura que recebe o estado atual e uma ação disparada,
 * e calcula o novo estado de forma imutável (sempre criando um novo array/objeto).
 */
export const cartReducer = createReducer(
  initialCartState,
  on(adicionarProduto, (state, { produto }) => ({
    ...state,
    itens: [...state.itens, produto],
  }))
);
