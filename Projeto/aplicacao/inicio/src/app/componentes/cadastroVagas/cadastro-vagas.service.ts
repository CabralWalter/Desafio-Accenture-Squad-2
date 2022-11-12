import { Observable } from 'rxjs';
import { CadastroVagas } from './cadastroVagas.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroVagasService {

  baseUrl = "http://localhost:3001/vagas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagemSucesso(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criaVagas(vaga: CadastroVagas): Observable<CadastroVagas>{
    return this.http.post<CadastroVagas>(this.baseUrl, vaga);
  }
} 
