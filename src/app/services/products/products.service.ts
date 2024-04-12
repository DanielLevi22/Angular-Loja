import { Injectable } from '@angular/core';



export interface ProductsType {
  id: number
  name: string
  preco: string
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProduts() {
    return [
      {id: 1, name: 'Caneca stanley preta', preco: '50,56', url: 'assets/caneca.png'},
      {id: 2, name: 'Coturno de Couro', preco: '100,29', url: 'assets/bota.png'},
      {id: 3, name: 'colete de inverno Vermelho', preco: '100,00', url: 'assets/camisa.png'},
      {id: 4, name: 'Cadeira camping', preco: '30,48', url: 'assets/cadeira.png'},
      {id: 5, name: 'Caneca stanley preta', preco: '56,89', url: 'assets/caneca.png'},
      {id: 6, name: 'Jaqueta', preco: '800,00', url: 'assets/jaqueta.png'},
      {id: 7, name: 'Cadeira camping', preco: '400,15', url: 'assets/cadeira.png'},
      {id: 8, name: 'Caneca stanley preta', preco: '300,65', url: 'assets/caneca.png'},
    ]
  }
}
