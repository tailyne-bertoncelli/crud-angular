import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro-list/livro';

@Component({
  selector: 'app-livro-detail',
  templateUrl: './livro-detail.component.html',
  styleUrls: ['./livro-detail.component.scss']
})
export class LivroDetailComponent {
  router = inject(ActivatedRoute);
  livro: Livro = new Livro();

  @Output() retorno = new EventEmitter<Livro>();

  constructor() {
    let teste = this.router.snapshot.paramMap.get("id");
    console.log(teste);
  }

  salvar() {
    //banco de dados... back
    this.retorno.emit(this.livro);
  }
}
