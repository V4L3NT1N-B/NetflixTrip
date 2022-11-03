import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-classic',
  templateUrl: './card-classic.component.html',
  styleUrls: ['./card-classic.component.css']
})
export class CardClassicComponent implements OnInit {

  genre = "Série SF et Fantastique";
  movieSerie = ["Lock And Key", "The 100", "Umbrella Academy", "Lucifer", "The Flash", "Alice in Borderland", "Daredevil", "Ragnarök"];

  constructor() { }

  ngOnInit(): void {
  }

}
