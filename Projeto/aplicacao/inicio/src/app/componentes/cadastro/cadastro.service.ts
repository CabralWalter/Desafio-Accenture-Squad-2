import { Entrevista } from './entrevista.model';
import { Cadastro } from './cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl= "http://localhost:3001/candidatos"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  mensagemSucesso(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  CriaCandidato(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro);
  }
  
  CriaEntrevista(entrevista: Entrevista): Observable<Entrevista>{
    return this.http.post<Entrevista>(this.baseUrl, entrevista);
  }

  lerCandidato(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl)
  }

  lerPorId(id: number): Observable<Cadastro>{
      const url= `${this.baseUrl}/${id}`  
    return this.http.get<Cadastro>(url)
  }

  atualizarCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url= `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  deletarCadastro(id: String): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`;   
    return this.http.delete<Cadastro>(url);
  }
}
