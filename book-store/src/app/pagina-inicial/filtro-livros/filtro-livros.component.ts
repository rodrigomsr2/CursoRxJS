import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filtro-livros',
  templateUrl: './filtro-livros.component.html',
  styleUrls: ['./filtro-livros.component.css']
})
export class FiltroLivrosComponent implements OnInit, AfterViewInit {

  @Input() subjectFiltro: Subject<any>;
  @ViewChild('filtro') filtro: ElementRef;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent<any>(this.filtro.nativeElement, 'keyup')
    .pipe(map(event => event.target.value))
    .subscribe(ev => this.subjectFiltro.next(ev));
  }

}
