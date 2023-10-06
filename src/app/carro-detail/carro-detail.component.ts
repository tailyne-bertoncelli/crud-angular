import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Carro } from '../carro-list/carro';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-carro-detail',
    templateUrl: './carro-detail.component.html',
    styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent {
    router = inject(ActivatedRoute);
    carro: Carro = new Carro();

    @Output() retorno = new EventEmitter<Carro>();

    constructor() {
        let teste = this.router.snapshot.paramMap.get("id");
        console.log(teste);
    }

    salvar() {
        this.retorno.emit(this.carro);
    }
}
