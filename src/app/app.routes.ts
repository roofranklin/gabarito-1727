import { Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: '**', redirectTo: '' },
];

