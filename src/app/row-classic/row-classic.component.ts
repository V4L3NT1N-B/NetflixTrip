import { Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-row',
	templateUrl: './row-classic.component.html',
	styleUrls: ['./row-classic.component.css']
})

export class RowComponent implements OnInit {

	panelGenre = ["Comédie", "SF et Fantastique", "Animation", "Horreur", "Top 10", "Aventure", "Drames"];

	panelFormat = ["série", "film"];

	constructor() {}

	ngOnInit():void {}

}	