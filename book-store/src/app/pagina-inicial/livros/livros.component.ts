import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { LivrosService } from '../../livros.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit, AfterViewInit {

  itens: any[];
  headers: any[];
  @Input() subjectFiltro: Subject<any>;

  constructor(
    private livrosService: LivrosService
  ) {}

  ngOnInit() {
    this.headers = ['Nome', 'Valor', 'Quantidade'];
    this.itens = this.livrosService.getLivros();
  }

  ngAfterViewInit() {
    this.subjectFiltro.subscribe(
      filtroItens => {
        this.itens = this.livrosService.getLivros().filter(item => item.nome.includes(filtroItens));
    });
  }
}
