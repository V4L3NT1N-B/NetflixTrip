import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var scrollState = "top";

		$(window).scroll(function() {
			if(($(window).scrollTop() != 0 ) && (scrollState === "top")) {
				$(".align-header").css({"background-color": "#141414", "transition": "background-color 0.3s"});
				scrollState = "scrolled";
			}
			else if (($(window).scrollTop() === 0 ) && (scrollState === "scrolled")) {
				$(".align-header").css("background-color", "transparent");
				scrollState = "top";
			}
		});

	}

}
