import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrls: ['./criar-vaga.component.css']
})
export class CriarVagaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelar(): void{
    this.router.navigate(['/vagas'])
  }
}
