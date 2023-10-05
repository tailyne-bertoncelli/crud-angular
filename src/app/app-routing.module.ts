import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroDetailComponent } from './carro-detail/carro-detail.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroDetailComponent } from './livro-detail/livro-detail.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"},
  {path:"login", component: LoginComponent},
  {path: "admin", component: IndexComponent, children: [ 
    {path: "pessoas", component: PessoaListComponent},
    {path: "pessoas/novo", component: PessoaDetailComponent},
    {path: "pessoas/editar/:id", component: PessoaDetailComponent},

    {path: "carro", component: CarroListComponent},
    {path: "carro/novo", component:CarroDetailComponent},
    {path: "carro/editar/:id", component:CarroDetailComponent},

    {path: "livro", component: LivroListComponent},
    {path: "livro/novo", component:LivroDetailComponent},
    {path: "livro/editar/:id", component:LivroDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
