import { createAction, props } from '@ngrx/store';
import { Produto } from '../../services/product';

/**
 * ACTIONS (Ações)
 * Representam a intenção de mudar o estado.
 * São como mensagens que dizem "o que aconteceu", sem alterar o estado diretamente.
 */
export const adicionarProduto = createAction(
  '[Carrinho] Adicionar Produto',
  props<{ produto: Produto }>()
);

export const clearCart = createAction('[Header] Clear Cart');

