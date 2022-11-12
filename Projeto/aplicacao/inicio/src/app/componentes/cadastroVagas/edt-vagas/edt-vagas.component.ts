import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroVagasService } from '../cadastro-vagas.service';
import { CadastroVagas } from '../cadastroVagas.model';

@Component({
  selector: 'app-edt-vagas',
  templateUrl: './edt-vagas.component.html',
  styleUrls: ['./edt-vagas.component.css']
})
export class EdtVagasComponent implements OnInit {

  vaga: CadastroVagas = {
    nomeVaga: '',
    localidade: '',
    tempoAlocacao: '',
    descricaoVaga: '',
    idioma: '',
    skillTecnica: ''

  }
  constructor(private cadastroServico: CadastroVagasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.cadastroServico.lerVagaPorId(id).subscribe(vaga =>{
      this.vaga = vaga
    });
  }

  autalizarVaga():void{
    this.cadastroServico.atualizarVaga(this.vaga).subscribe(() =>{
      this.cadastroServico.mensagemSucesso("Vaga atualizado com sucesso");
      this.router.navigate(["/vagas"]);
    });
  }


  cancelar():void{
    this.router.navigate(["/vagas"])
  }

  deletarCadastro(){
    this.cadastroServico.deletarCadastro(`${this.vaga.id}`).subscribe(()=>{
          this.cadastroServico.mensagemSucesso("Cadastro excluido com Sucesso");
          this.router.navigate(['/vagas']);
        })
      }
}
