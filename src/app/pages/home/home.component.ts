import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProductsComponent } from '../../components/products/products.component';
import { PromotionsComponent } from '../../components/promotions/promotions.component';
import { CollectionsComponent } from '../../components/collections/collections.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    PromotionsComponent,
    CollectionsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
