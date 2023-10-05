import { Component } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent {
  carro: Carro[] = [];
  constructor() {
    let carro1 = new Carro();
    carro1.nome = "Evoque";
    carro1.ano = 2022;

    let carro2 = new Carro();
    carro2.nome = "Civic";
    carro2.ano = 2019;

    let carro3 = new Carro();
    carro3.nome = "Mustang";
    carro3.ano = 2020;

    let carro4 = new Carro();
    carro4.nome = "Ferrari";
    carro4.ano = 2018;

    let carro5 = new Carro();
    carro5.nome = "Golf";
    carro5.ano = 2017;

    let carro6 = new Carro();
    carro6.nome = "Porsche";
    carro6.ano = 2021;

    let carro7 = new Carro();
    carro7.nome = "Corolla";
    carro7.ano = 2016;

    let carro8 = new Carro();
    carro8.nome = "Mazda";
    carro8.ano = 2015;

    let carro9 = new Carro();
    carro9.nome = "Challenger";
    carro9.ano = 2014;

    let carro10 = new Carro();
    carro10.nome = "Audi";
    carro10.ano = 2023;

    this.carro.push(carro1);
    this.carro.push(carro2);
    this.carro.push(carro3);
    this.carro.push(carro4);
    this.carro.push(carro5);
    this.carro.push(carro6);
    this.carro.push(carro7);
    this.carro.push(carro8);
    this.carro.push(carro9);
    this.carro.push(carro10);
  }
}
