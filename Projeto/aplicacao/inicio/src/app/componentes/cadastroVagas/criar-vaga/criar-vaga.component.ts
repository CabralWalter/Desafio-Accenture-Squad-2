import { CadastroVagasService } from './../cadastro-vagas.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CadastroVagas } from '../cadastroVagas.model';

@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrls: ['./criar-vaga.component.css']
})
export class CriarVagaComponent implements OnInit {
  vaga: CadastroVagas = {
    nomeVaga: '',
    localidade: '',
    tempoAlocacao: '',
    descricaoVaga: '',
    idioma: '',
    skillTecnica: ''

  }
  constructor(private cadastroVagaService: CadastroVagasService,private router: Router) { }

  

  ngOnInit(): void {
  }

  criarCadastroVagas(): void{
    this.cadastroVagaService.criaVagas(this.vaga).subscribe(() =>{
      this.cadastroVagaService.mensagemSucesso('Operação realizada com sucesso');
      this.router.navigate(['/vagas']);
    })
  }

  cancelar(): void{
    this.router.navigate(['/vagas'])
  }
}
