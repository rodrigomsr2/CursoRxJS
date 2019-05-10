import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroLivrosComponent } from './filtro-livros.component';

describe('FiltroLivrosComponent', () => {
  let component: FiltroLivrosComponent;
  let fixture: ComponentFixture<FiltroLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
