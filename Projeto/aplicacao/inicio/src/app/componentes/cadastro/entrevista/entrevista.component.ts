import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {
  candidato: Cadastro = {
    nome: '',
    nivel: '',
    dataEntrevista: '',
    email:''
  }

  constructor(private cadastroServico: CadastroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.cadastroServico.lerPorId(id).subscribe(candidato =>{
      this.candidato = candidato
    });
  } 

  autalizarCadastro():void{
    this.cadastroServico.atualizarCadastro(this.candidato).subscribe(() =>{
      this.cadastroServico.mensagemSucesso("Candidato atualizado com sucesso");
      this.router.navigate(["/cadastrar"]);
    });
  }
}
