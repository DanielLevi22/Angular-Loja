import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-detailsrecommendations',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './detailsrecommendations.component.html',
  styleUrl: './detailsrecommendations.component.scss'
})
export class DetailsrecommendationsComponent {

}
