import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros$ = Observable.create(
    observable => {
      
    });

  constructor() { }

  getLivros() {
    return [
      {nome: 'A origem do universo', valor: 12.50, quantidade: 10},
      {nome: 'Eu quero beber', valor: 22.50, quantidade: 20},
      {nome: 'Café ou cerveja?', valor: 32.50, quantidade: 30},
      {nome: 'Sexta-feira 18:14', valor: 42.50, quantidade: 40},
      {nome: 'Tentando se livrar da aula de pilates', valor: 52.50, quantidade: 50},
    ];
  }

}
