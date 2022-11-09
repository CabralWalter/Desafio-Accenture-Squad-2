import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  
  constructor() { }
  
  

 // @ViewChild("meuCanvas", { static: true })elemento!: ElementRef;

  ngOnInit(): void {
    
    new Chart("myChart" , {
      type: 'polarArea',
    data: {
        labels: ['Abertas', 'Confirmadas'],
        datasets: [{
            label: 'Vagas',
            data: [26, 29],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true
    }
    });


    new Chart("myChart02" , {
      type: 'bar',
      
    data: {
        labels: ['A Entrevista', 'Aprovados', 'Contratados', 'Inaptos'],
        datasets: [{
            label: 'Candidatos',
            data: [26, 29, 23, 15],
            backgroundColor: [
                'rgb(255,255,0)',
                'rgb(255, 165, 0)',
                'rgb(0,255,0)',
                'rgb(255,0,0)'
            ],
        }]
    },
    options: {
       responsive: true,
       indexAxis: 'y'
    },
    
    });
    
  }

  

}


