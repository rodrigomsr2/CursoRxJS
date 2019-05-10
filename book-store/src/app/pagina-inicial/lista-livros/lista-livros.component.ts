import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LivrosService } from '../../livros.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit, AfterViewInit {

  itens: any[];
  @Input() subjectFiltro: Subject<any>;

  constructor(
    private livrosService: LivrosService
  ) { }

  ngOnInit() {
    this.itens = this.livrosService.getLivros();
  }

  ngAfterViewInit() {
    this.subjectFiltro.subscribe(
      filtroItens => {
        this.itens = this.livrosService.getLivros().filter(item => item.nome.includes(filtroItens));
    });
  }

}
