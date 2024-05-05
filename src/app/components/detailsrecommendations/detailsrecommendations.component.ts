import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-detailsrecommendations',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './detailsrecommendations.component.html',
  styleUrl: './detailsrecommendations.component.scss'
})
export class DetailsrecommendationsComponent {

}
