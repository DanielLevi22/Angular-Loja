import { Component, OnInit } from '@angular/core';
import { ProdutccollectionsService, ProdutccollectionsType } from '../../services/produtccollections/produtccollections.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-productcollections',
  standalone: true,
  imports: [
    NgFor,
    NgStyle
  ],
  templateUrl: './productcollections.component.html',
  styleUrl: './productcollections.component.scss'
})
export class ProductcollectionsComponent implements OnInit {

  products:ProdutccollectionsType[] = []

  constructor(private produtccollectionsService:ProdutccollectionsService) {

  }

  ngOnInit(): void {
    this.products = this.produtccollectionsService.getProducts();
  
  }

}
