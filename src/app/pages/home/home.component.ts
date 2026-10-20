import { Component } from '@angular/core';
import { ListaProdutos } from '../../components/lista-produtos/lista-produtos';

@Component({
  selector: 'app-home',
  imports: [ListaProdutos],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
