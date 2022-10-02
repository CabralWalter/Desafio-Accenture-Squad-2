
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
  public cadastroLogin: FormGroup = this.formBuilder.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void { }

  public logar(){
    
    if(this.cadastroLogin.valid){
      if(this.cadastroLogin.value.usuario == 'admin' && this.cadastroLogin.value.senha == 'admin'){

        location.href = "http://127.0.0.1:5500/Projeto/page/src/app/home/home.component.html"

      }else{
        alert('Usuario ou senha invalidos');
      }
      
    }
  }
}
