import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-row',
	templateUrl: './row-classic.component.html',
	styleUrls: ['./row-classic.component.css']
})

export class RowComponent implements OnInit {

	panelGenre = ["Comédie", "SF et Fantastique", "Animation", "Horreur", "Films européens", "Drames", "Top 10"];

	panelFormat = ["série", "film"];

	constructor() {}

	ngOnInit():void {}

}	