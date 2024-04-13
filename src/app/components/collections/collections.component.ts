import { Component } from '@angular/core';
import { ProductcollectionsComponent } from '../productcollections/productcollections.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    ProductcollectionsComponent
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

}
