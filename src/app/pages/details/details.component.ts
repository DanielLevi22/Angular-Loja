import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductComponent } from '../../components/product/product.component';
import { CardcommentsComponent } from '../../components/cardcomments/cardcomments.component';
import { DetailsproductComponent } from '../../components/detailsproduct/detailsproduct.component';
import { DescriptionproductComponent } from '../../components/descriptionproduct/descriptionproduct.component';
import { DetailsrecommendationsComponent } from '../../components/detailsrecommendations/detailsrecommendations.component';
import { DetailsassessmentComponent } from '../../components/detailsassessment/detailsassessment.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    DetailsproductComponent,
    DescriptionproductComponent,
    DetailsrecommendationsComponent,
    CardcommentsComponent,
    DetailsassessmentComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
