import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { of } from 'rxjs';
import { Product, Produto } from '../../services/product';
import { cartReducer } from '../../store/cart';
import { ProdutoDetalheComponent } from './produto-detalhe.component';

describe('ProdutoDetalheComponent', () => {
  let component: ProdutoDetalheComponent;
  let fixture: ComponentFixture<ProdutoDetalheComponent>;

  const produtoMock: Produto = {
    id: 5,
    title: 'Jaqueta Masculina',
    price: 250,
    description: 'Jaqueta de couro premium',
    category: 'roupas',
    image: 'jaqueta.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoDetalheComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        provideStore({ cart: cartReducer }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => (key === 'id' ? '5' : null),
              },
            },
          },
        },
      ],
    }).compileComponents();

    const productService = TestBed.inject(Product);
    vi.spyOn(productService, 'obterProdutoPorId').mockReturnValue(of(produtoMock));

    fixture = TestBed.createComponent(ProdutoDetalheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os detalhes do produto pelo id obtido via ActivatedRoute', () => {
    expect(component.produto()).toEqual(produtoMock);
    expect(component.carregando()).toBeFalsy();
  });

  it('deve adicionar o produto ao carrinho', () => {
    component.adicionarAoCarrinho();
    expect(component.adicionado()).toBeTruthy();
  });
});
