import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-ler',
  templateUrl: './cadastro-ler.component.html',
  styleUrls: ['./cadastro-ler.component.css']
})
export class CadastroLerComponent implements OnInit {

  cadatros?: Cadastro[];

  constructor(private cadastroServico: CadastroService) { }

  ngOnInit(): void {
    this.cadastroServico.lerCandidato().subscribe(cadatros =>{
      this.cadatros = cadatros
    })
  }

}
