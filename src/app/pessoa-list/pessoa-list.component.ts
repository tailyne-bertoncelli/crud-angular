import { Component, inject } from '@angular/core';
import { Pessoa } from './Pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent {
  lista: Pessoa[] = [];

  modalService = inject(NgbModal);

  constructor() {
    let pessoa1 = new Pessoa();
    pessoa1.nome = "Tailyne";
    pessoa1.idade = 19;

    let pessoa2 = new Pessoa();
    pessoa2.nome = "Lucas";
    pessoa2.idade = 25;

    let pessoa3 = new Pessoa();
    pessoa3.nome = "Camila";
    pessoa3.idade = 30;

    let pessoa4 = new Pessoa();
    pessoa4.nome = "Andre";
    pessoa4.idade = 22;

    let pessoa5 = new Pessoa();
    pessoa5.nome = "Juliana";
    pessoa5.idade = 32;

    let pessoa6 = new Pessoa();
    pessoa6.nome = "Rodrigo";
    pessoa6.idade = 35;

    let pessoa7 = new Pessoa();
    pessoa7.nome = "Isabela";
    pessoa7.idade = 18;

    let pessoa8 = new Pessoa();
    pessoa8.nome = "Fernanda";
    pessoa8.idade = 78;

    let pessoa9 = new Pessoa();
    pessoa9.nome = "Rafael";
    pessoa9.idade = 45;

    let pessoa10 = new Pessoa();
    pessoa10.nome = "Ana";
    pessoa10.idade = 89;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }

  abrirModal(abc: any){
    this.modalService.open(abc, {size: 'lg'});
  }

  addNaLista(lista: Pessoa){
    this.lista.push(lista);
    this.modalService.dismissAll();
  }
}
