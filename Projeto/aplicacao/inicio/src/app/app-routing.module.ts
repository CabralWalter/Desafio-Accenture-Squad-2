import { CadastroDeletarComponent } from './componentes/cadastro/cadastro-deletar/cadastro-deletar.component';
import { CadastroAtualizarComponent } from './componentes/cadastro/cadastro-atualizar/cadastro-atualizar.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { EntrevistaComponent } from './views/entrevista/entrevista.component';
import { OmholdComponent } from './views/omhold/omhold.component';
import { ContratadosComponent } from './views/contratados/contratados.component';
import { InaptoComponent } from './views/inapto/inapto.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { AnaliseComponent } from './views/analise/analise.component';
import { PreCadastroComponent } from './componentes/cadastro/pre-cadastro/pre-cadastro.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path:"cadastrar",
  component: CadastrarComponent
},
{
 path: "entrevista",
 component: EntrevistaComponent
},
{
  path: "omhold",
  component: OmholdComponent
},
{
  path: "contratados",
  component: ContratadosComponent
},
{
  path: "inapto",
  component: InaptoComponent
},
{
  path: "vagas",
  component: VagasComponent
},
{
  path: "analise",
  component: AnaliseComponent
},
{
  path: "cadastro/pre-cadastro",
  component: PreCadastroComponent
},
{
  path: "cadastro/cadastro-atualizar/:id",
  component: CadastroAtualizarComponent
},
{
  path: "cadastro/cadastro-deletar/:id",
  component: CadastroDeletarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
