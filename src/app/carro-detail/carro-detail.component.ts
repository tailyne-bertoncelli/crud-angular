import { Component, inject } from '@angular/core';
import { Carro } from '../carro-list/carro';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-carro-detail',
    templateUrl: './carro-detail.component.html',
    styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent {
    carro: Carro = new Carro();
    
    router = inject(ActivatedRoute);
    constructor(){
        let teste = this.router.snapshot.paramMap.get("id");
        if (teste) {
            this.carro.nome = "Fox";
            this.carro.ano = 2020;
        }
    }
}
