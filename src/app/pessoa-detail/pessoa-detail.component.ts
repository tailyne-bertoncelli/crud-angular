import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa-list/Pessoa';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent {
  router = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa();

  @Output() retorno = new EventEmitter<Pessoa>();

  constructor() {
    let teste = this.router.snapshot.paramMap.get("id");
    console.log(teste);
  }

  salvar() {
    //banco de dados... back
    this.retorno.emit(this.pessoa);
  }
}
