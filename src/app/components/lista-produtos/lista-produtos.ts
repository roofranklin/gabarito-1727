import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos {}
