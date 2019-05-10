import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
