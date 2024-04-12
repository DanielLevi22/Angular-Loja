import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


}
