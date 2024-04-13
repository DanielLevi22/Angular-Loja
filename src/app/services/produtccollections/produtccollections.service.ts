import { Injectable } from '@angular/core';


export interface ProdutccollectionsType {
  id: number
  name: string
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class ProdutccollectionsService {

  constructor() { }

  getProducts() {
    return [
      {id: 1,name: 'Camiseta', url: 'assets/camiseta.png'},
      {id: 2,name: 'Calças', url: 'assets/calcas.png'},
      {id: 3,name: 'Acessórios',  url: 'assets/acessorios.png'},
      {id: 4,name: 'Academia',url: 'assets/academia.png'},
      {id: 5,name: 'Bonés', url: 'assets/bones.png'},
      {id: 6,name: 'Outros produtos...',  url: 'assets/outrosprodutos.png'},
   
    ]
  }
}
