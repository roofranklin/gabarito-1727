import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

/**
 * SELECTORS (Seletores)
 * Funções usadas para ler fatias específicas do cofre (Store).
 * São performáticos e memorizados (só recalculam quando o estado muda).
 */

// 1. Pega a fatia principal "cart" do cofre global
export const selectCartState = createFeatureSelector<CartState>('cart');

// 2. Lê a lista completa de itens do carrinho
export const selectItensCarrinho = createSelector(
  selectCartState,
  (state) => state.itens
);

// 3. Lê apenas a quantidade total de itens no carrinho
export const selectQuantidadeItens = createSelector(
  selectCartState,
  (state) => state.itens.length
);
