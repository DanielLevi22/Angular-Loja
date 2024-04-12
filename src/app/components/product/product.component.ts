import { Component, Input, OnInit } from '@angular/core';
import { ProductsService, ProductsType } from '../../services/products/products.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{





  products:ProductsType[] = []




  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProduts();
  }


}
