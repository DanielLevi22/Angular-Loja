import { AfterViewInit, Component } from '@angular/core';
import {  ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  public path = ''

  constructor(private router: Router,private activatedRoute:ActivatedRoute) {}
  ngAfterViewInit(): void {

    if (typeof window !== 'undefined') {
      this.path = window.location.pathname;
    }
  }


}
