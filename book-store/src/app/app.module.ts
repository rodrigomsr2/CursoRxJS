import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LivrosComponent } from './pagina-inicial/livros/livros.component';
import { LivroComponent } from './pagina-inicial/livros/livro/livro.component';
import { AutoresComponent } from './pagina-inicial/autores/autores.component';
import { FiltroLivrosComponent } from './pagina-inicial/filtro-livros/filtro-livros.component';
import { ListaLivrosComponent } from './pagina-inicial/lista-livros/lista-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    LivrosComponent,
    LivroComponent,
    AutoresComponent,
    FiltroLivrosComponent,
    ListaLivrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
