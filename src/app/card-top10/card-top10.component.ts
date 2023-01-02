import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var getTop10 : any;

@Component({
	selector: 'app-card-top10',
	templateUrl: './card-top10.component.html',
	styleUrls: ['./card-top10.component.css']
})

export class CardTop10Component implements OnInit {

	movieTop : Array<Array<string>> = [];
	BASEURLimg : string = "https://image.tmdb.org/t/p/w200";
	

	constructor() { }

	ngOnInit(): void {
		(async () => {

			var top = await getTop10();

			var soustab = [];

			for (var i = 0 ; i < 10 ; i++) {
				soustab.push(top.results[i].title);
				soustab.push(this.BASEURLimg + top.results[i].poster_path);
				this.movieTop.push(soustab);
				soustab = [];
			}
		})();

		// SLIDER
		var hasMoved : boolean = false;
		var paginationTop : number = 0;

		// SLIDER - ANIMATION
		$('.top10 .background-overflow .next').on("click",function() {
			paginationTop -= 907.3333335;

			$(this).parents().children().children().children('.slider-item').css({"transform": "translate("+paginationTop.toString()+"px)", "transition": "0.4s"});
			$(this).parents().parents().find(".background-overflow .previous").css("display", "flex");
			hasMoved = true;
		});

		$('.top10 .background-overflow .previous').on("click",function() {
			paginationTop += 907.3333335;
			$(this).parents().children().children().children('.slider-item').css({"transform": "translate("+paginationTop.toString()+"px)", "transition": "0.4s"});
		});

		//SLIDER - BUTTONS
		$(".row.Top10").on("mouseenter", function() {
			if(paginationTop == 0){
				$( this ).find(".background-overflow .next").css("display", "flex");
			}else{
				$( this ).find(".background-overflow .next").css("display", "none");
			}
		});
		
		$(".row.Top10").on("mouseleave", function() {
			$( this ).find(".background-overflow .next").css("display", "none");
			$( this ).find(".background-overflow .previous").css("display", "none");
		});

		$(".row.Top10").on("mouseover", function() {
			if(paginationTop == 0){
				$( this ).find(".background-overflow .next").css("display", "flex");
				$( this ).find(".background-overflow .previous").css("display", "none");
			}else{
				$( this ).find(".background-overflow .previous").css("display", "flex");
				$( this ).find(".background-overflow .next").css("display", "none");
			}
		});
	}

}