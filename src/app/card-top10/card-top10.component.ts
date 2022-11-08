import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-top10',
	templateUrl: './card-top10.component.html',
	styleUrls: ['./card-top10.component.css']
})

export class CardTop10Component implements OnInit {

	serieTop10 = ["The Watcher", "Dahmer", "Love, Death + Robots", "Barbares", "Notre-Dame", "Dynastie", "Le Cabinet des curiosités", "Friends", "Peaky Binders", "Kingdom"];

	constructor() { }

	ngOnInit(): void {
	}

}