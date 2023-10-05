import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { FooterComponent } from './footer/footer.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { LivroDetailComponent } from './livro-detail/livro-detail.component';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroDetailComponent } from './carro-detail/carro-detail.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    MenuSuperiorComponent,
    FooterComponent,
    PessoaDetailComponent,
    IndexComponent,
    LoginComponent,
    LivroListComponent,
    LivroDetailComponent,
    CarroListComponent,
    CarroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
