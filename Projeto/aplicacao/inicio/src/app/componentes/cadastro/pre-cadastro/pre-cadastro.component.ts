import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.css']
})
export class PreCadastroComponent implements OnInit {

  candidato01: Cadastro = {
    nome: "Igor",
    nivel: "junior",
    faculdade: "Senac"
  }

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  
  criarCadastro(): void{
    this.cadastroService.CriaCandidato(this.candidato01).subscribe(()=> {
      this.cadastroService.mensagemSucesso('Operação realizado com sucesso')
      this.router.navigate(['/cadastrar'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/cadastrar'])
  }
}
