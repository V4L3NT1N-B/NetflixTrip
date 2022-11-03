import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-home-cards',
	templateUrl: './home-cards.component.html',
	styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements OnInit {

	constructor() { }  

	ngOnInit() {
		var firsttime = 3000;
		var secondtime = 10000;

		$(".synopsis").delay(firsttime).slideToggle(400).delay(secondtime).slideToggle(400);
		$(".netflix-production").delay(firsttime).animate({"height": "20px", "margin-right": "0"}).delay(secondtime).animate({"height": "35px", "margin-right": "10px"});
		$("#title-main h2").delay(firsttime).animate({"font-size": "16px"}).delay(secondtime).animate({"font-size": "24px"});
		$("#title-main h1").delay(firsttime).animate({"font-size": "32px", "margin-bottom": "16px"}).delay(secondtime).animate({"font-size": "64px", "margin-bottom": "0"});

	}

}
