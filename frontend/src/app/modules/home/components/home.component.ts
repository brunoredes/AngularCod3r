import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _headerService: HeaderService) {
    _headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
   }

  ngOnInit(): void {
  }

}
