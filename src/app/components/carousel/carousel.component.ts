import { Component, OnInit, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductsService, ProductsType } from '../../services/products/products.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, NgClass,LucideAngularModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  products = signal<ProductsType []>([])

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products.set(this.productService.getProducts())
      

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 3
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 2
          },
          {
            breakpoint: '550px',
            numVisible: 1,
            numScroll: 2
        }
      ];
  }
 

  
}