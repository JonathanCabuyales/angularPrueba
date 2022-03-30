import { Component, OnInit } from '@angular/core';

declare var activeLink: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  list =`console.log('algo');`;

  constructor() { }

  ngOnInit(): void {
    
  }


}
