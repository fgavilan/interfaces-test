import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  LINKS = [
    {
      name: 'Root',
      url: '/'
    },
    {
      name: 'Form',
      url: '/form'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
