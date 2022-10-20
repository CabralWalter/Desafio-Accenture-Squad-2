import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeardComponent } from './componentes/template/heard/heard.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component';


import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { EntrevistaComponent } from './views/entrevista/entrevista.component';
import { OmholdComponent } from './views/omhold/omhold.component';
import { ContratadosComponent } from './views/contratados/contratados.component';
import { InaptoComponent } from './views/inapto/inapto.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { AnaliseComponent } from './views/analise/analise.component';
import { PreCadastroComponent } from './componentes/cadastro/pre-cadastro/pre-cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CadastrarComponent,
    EntrevistaComponent,
    OmholdComponent,
    ContratadosComponent,
    InaptoComponent,
    VagasComponent,
    AnaliseComponent,
    PreCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
