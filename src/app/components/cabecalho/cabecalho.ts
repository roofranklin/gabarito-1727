import { Component } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  imports: [],
  selector: 'app-cabecalho',
  styleUrl: './cabecalho.css',
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
  constructor(public cartService: Cart) {}
}
