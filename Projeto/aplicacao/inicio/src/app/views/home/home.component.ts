import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    new Chart("myChart02" , {
      type: 'bar',
      
    data: {
        labels: ['A Entrevista', 'Aprovados', 'Contratados', 'Inaptos'],
        datasets: [{
            label: 'Candidatos',
            data: [26, 29, 23, 15],
            backgroundColor: [
              '#4e87b4',
              '#4e87b4',
              '#4e87b4',
              '#4e87b4'
            ],
        }]
    },
    options: {
       responsive: true
    },
    
    });
    
  }

  
  }






