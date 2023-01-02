import { Component, OnInit, Input, ɵisListLikeIterable, } from '@angular/core';
import * as $ from 'jquery';
declare var getMovie : any;

@Component({
	selector: 'app-card-classic',
	templateUrl: './card-classic.component.html',
	styleUrls: ['./card-classic.component.css']
})
export class CardClassicComponent implements OnInit {

	@Input()
	panelGenre : Array<string> = [];

	@Input()
	genre : string = "";

	movieTitles : Array<Array<string>> = [];

	panelGenreGB : Array<string> = ["Comedy", "Science Fiction", "Animation", "Horror","Top 10", "Adventure", "Drama"];

	BASEURLimg : string = "https://image.tmdb.org/t/p/w300";

	myMap = new Map<string, Array<any>>([]);

	constructor() {}

	ngOnInit(): void {
		
		(async () => {

			if (localStorage.getItem(this.panelGenreGB[this.panelGenre.indexOf(this.genre)]) == null){
				console.log("je passe par là");

				var i = 0;

				var cumul : Array<string>= [];
	
				while(i < 18) {
					var idMovie = Math.floor(Math.random() * 1000);
					var movie = await getMovie(idMovie);
					var movieTitle = movie.title;
					var URLmovie = movie.backdrop_path;
					var URLimg = this.BASEURLimg + URLmovie;
					var soustab = [];
					soustab.push(movieTitle);
					soustab.push(URLimg);
					
					if(movieTitle !== undefined && !cumul.includes(movieTitle)){
						var len = movie.genres.length;
						for (let x = 0 ; x < len ; x++){
							//console.log(this.panelGenreGB[this.panelGenre.indexOf(this.genre)]);
							//console.log(movie.genres[x].name);
							console.log("blabla");
							if (this.panelGenreGB[this.panelGenre.indexOf(this.genre)].includes(movie.genres[x].name)){
								this.movieTitles.push(soustab);
								cumul.push(movieTitle);
								i++;
							}
						}
					}
				}
				localStorage.setItem(this.panelGenreGB[this.panelGenre.indexOf(this.genre)], JSON.stringify(this.movieTitles));
							
			} else {
				console.log("loser")
				this.movieTitles = JSON.parse(String(localStorage.getItem(this.panelGenreGB[this.panelGenre.indexOf(this.genre)])));
			}
			
		})();
		

		//SLIDER
		var pagination = 0;
		var hasMoved : boolean = false;
		var genre = this.genre;
		var myMap = this.myMap;

		var rowProperty = [pagination, hasMoved];
		
		//SLIDER - ANIMATION
		$('.background-overflow .next').on("click",function() {
			var titre = $(this).parents().children().children(".titre").text();
			if( titre == genre ){
				pagination -= 1361.6;
				$(this).parents().children().children().children('.slider-item').css({"transform": "translate("+pagination.toString()+"px)", "transition": "0.4s"}); //116.66666666666667%
				
				hasMoved = true;
				rowProperty[0] = pagination;
				rowProperty[1] = hasMoved;
			
				myMap.set(genre, rowProperty);
			};
		});

		$('.background-overflow .previous').on("click",function() {
			var titre = $(this).parents().children().children(".titre").text();
			if( titre == genre ){
				pagination += 1361.6;
				//console.log("paginationPrev : " + pagination);
				$(this).parents().children().children().children('.slider-item').css({"transform": "translate("+pagination.toString()+"px)", "transition": "0.4s"});
			}
		});

		//SLIDER - BUTTONS
		$(".row").on("mouseenter", function() {
			$( this ).find(".background-overflow .next").css("display", "flex");
			if(hasMoved){
				var titre = $(this).parents().parents().children().children(".titre").text();
				if(titre == genre ){
					$( this ).children().children().children(".background-overflow .previous").css("display", "flex");
					$( this ).children().children(".background-overflow.previous").css("display", "block");
					if (pagination == -2723.2){					
						$( this ).children().children().children(".background-overflow .next").css("display", "none");
					}
				}
			}
		});
		
		$(".row").on("mouseleave", function() {
			$( this ).find(".background-overflow .next").css("display", "none");
			$( this ).find(".background-overflow .previous").css("display", "none");
		});

		$(".row").on("mouseover", function() {
			var titre = $(this).parents().children().children(".titre").text();
			if(titre == genre ){
				if(hasMoved){
				$( this ).find(".background-overflow .previous").css("display", "flex");
				$( this ).children().children(".background-overflow.previous").css("display", "block");
					if(pagination == 0){
						$( this ).children().children().children(".background-overflow .next").css("display", "flex");
						$( this ).children().children().children(".background-overflow .previous").css("display", "none");
					}else if (pagination == -2723.2){
						$( this ).children().children().children(".background-overflow .previous").css("display", "flex");
						$( this ).children().children().children(".background-overflow .next").css("display", "none");
					}
					
				}
			}
		});	
	};
}
