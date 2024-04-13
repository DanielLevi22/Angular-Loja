import { Injectable } from '@angular/core';



export interface ProductsType {
  id: number
  name: string
  preco: string
  url:string,
  like: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {id: 1, like: false ,name: 'Caneca stanley preta', preco: '50,56', url: 'assets/caneca.png'},
      {id: 2, like: false ,name: 'Coturno de Couro', preco: '100,29', url: 'assets/bota.png'},
      {id: 3, like: false ,name: 'colete de inverno Vermelho', preco: '100,00', url: 'assets/camisa.png'},
      {id: 4, like: false ,name: 'Cadeira camping', preco: '30,48', url: 'assets/cadeira.png'},
      {id: 5, like: false ,name: 'Caneca stanley preta', preco: '56,89', url: 'assets/caneca.png'},
      {id: 6, like: false ,name: 'Jaqueta', preco: '800,00', url: 'assets/jaqueta.png'},
      {id: 7, like: false ,name: 'Cadeira camping', preco: '400,15', url: 'assets/cadeira.png'},
      {id: 8, like: false ,name: 'Caneca stanley preta', preco: '300,65', url: 'assets/caneca.png'},
    ]
  }
}
