import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  subjectFiltro: Subject<any>;

  constructor() { }

  ngOnInit() {
    this.subjectFiltro = new Subject();
  }

}
