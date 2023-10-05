import { Component } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.scss']
})
export class LivroListComponent {
  livro: Livro[] = [];
  constructor() {
    let livro1 = new Livro();
    livro1.nome = "Turma da monica";
    livro1.autor = "Mauricio de Souza";

    let livro2 = new Livro();
    livro2.nome = "Dom Casmurro";
    livro2.autor = "Machado de Assis";

    let livro3 = new Livro();
    livro3.nome = "Harry Potter e a Pedra Filosofal";
    livro3.autor = "J.K. Rowling";

    let livro4 = new Livro();
    livro4.nome = "1984";
    livro4.autor = "George Orwell";

    let livro5 = new Livro();
    livro5.nome = "O Senhor dos Anéis";
    livro5.autor = "J.R.R. Tolkien";

    let livro6 = new Livro();
    livro6.nome = "Cem Anos de Solidão";
    livro6.autor = "Gabriel García Márquez";

    let livro7 = new Livro();
    livro7.nome = "Alice no País das Maravilhas";
    livro7.autor = "Lewis Carroll";

    let livro8 = new Livro();
    livro8.nome = "Crime e Castigo";
    livro8.autor = "Fyodor Dostoevsky";

    let livro9 = new Livro();
    livro9.nome = "A Revolução dos Bichos";
    livro9.autor = "George Orwell";

    let livro10 = new Livro();
    livro10.nome = "O Pequeno Príncipe";
    livro10.autor = "Antoine de Saint-Exupéry";

    this.livro.push(livro1);
    this.livro.push(livro2);
    this.livro.push(livro3);
    this.livro.push(livro4);
    this.livro.push(livro5);
    this.livro.push(livro6);
    this.livro.push(livro7);
    this.livro.push(livro8);
    this.livro.push(livro9);
    this.livro.push(livro10);
  }
}
