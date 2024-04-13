import { Component, Input, OnInit } from '@angular/core';
import { ProductsService, ProductsType } from '../../services/products/products.service';
import {NgFor,NgClass} from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    LucideAngularModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{





  products:ProductsType[] = []




  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  Like(productId: number) {
    this.products = this.products.map(product => {
      if (product.id === productId) {
        return { ...product, like: !product.like };
      }
      return product;
    });

  }
}
