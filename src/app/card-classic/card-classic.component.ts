import { Component, OnInit, Input, } from '@angular/core';
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

	//dict = new Map<string, Array<string>>();

	movieTitles : Array<Array<string>> = [];

	panelGenreGB : Array<string> = ["Comedy", "Science Fiction", "Animation", "Horror","Top 10", "Adventure", "Drama"];

	BASEURLimg : string = "https://image.tmdb.org/t/p/w300";

	movieData : Array<string> = []

	constructor() {}

	ngOnInit(): void {

		
		(async () => {

			if (localStorage.getItem(this.panelGenreGB[this.panelGenre.indexOf(this.genre)]) == null){


				var i = 0;

				var cumul : Array<string>= [];
	
				while(i < 12) {
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
						for (let x =0; x<len; x++){
							//console.log(this.panelGenreGB[this.panelGenre.indexOf(this.genre)]);
							//console.log(movie.genres[x].name);
							if (this.panelGenreGB[this.panelGenre.indexOf(this.genre)].includes(movie.genres[x].name)){
								this.movieTitles.push(soustab);
								cumul.push(movieTitle);
								i++;
							}
						}
					}
				}
				localStorage.setItem(this.panelGenreGB[this.panelGenre.indexOf(this.genre)], JSON.stringify(this.movieTitles));
				console.log("terminé");
							
			} else {
				console.log("repeat");
				this.movieTitles = JSON.parse(String(localStorage.getItem(this.panelGenreGB[this.panelGenre.indexOf(this.genre)])));
			}
				
		})();

		$(".row").on("mouseenter", function() {
			$( this ).find(".next img").css("visibility", "visible");
		});

		$(".row").on("mouseleave", function() {
			$( this ).find(".next img").css("visibility", "hidden");
		});

	};
}
