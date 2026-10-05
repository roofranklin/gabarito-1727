import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
import { Rodape } from './components/rodape/rodape';

@Component({
  imports: [Cabecalho, ListaProdutos, Rodape],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('gabarito-1727');
}
