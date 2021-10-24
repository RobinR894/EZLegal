import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.html',
  styleUrls: ['../style.css']
})
export class AdminsearchComponent implements OnInit {
  searchText = '';
  characters = [
    'Consultation for legal information and advice',
    'Consultation to review documents ',
    'Mediation, arbitration, or other third party services',
    'Preparation of documents',
    'Representing clients in negotiations ',
    'Representing clients in court, arbitration, administrative and legislative hearings ',
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
