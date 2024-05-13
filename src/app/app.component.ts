import { Component, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


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
export class AppComponent implements  OnInit{

  public path = ''

  constructor() {}
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.path = window.location.pathname;
    }
  }


}
