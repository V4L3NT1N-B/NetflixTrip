import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-classic',
  templateUrl: './row-classic.component.html',
  styleUrls: ['./row-classic.component.css']
})
export class RowClassicComponent implements OnInit {

  panelGenre = ["Comédie", "SF et Fantastique", "Anime", "Horreur", "Films européens", "Drames"]

  constructor() { }

  ngOnInit(): void {
  }

}
