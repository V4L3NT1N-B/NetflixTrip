import { Component, OnInit, Input, } from '@angular/core';
declare var getData : any;
//declare var getMovie : any;
//declare var movieTitles : any;

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

	panelComedie : Array<string> = ["After Life", "Friends", "Brooklyn Nine-nine", "Five", "Presque", "The End of the F*cking World", "Familly Business", "How I Met Your Mother", "Bonne nuit Blanche"];

	panelSF : Array<string> = ["Sense8", "Lock And Key", "The 100", "Umbrella Academy", "Lucifer", "The Flash", "Alice in Borderland", "Daredevil", "Ragnarök"];

	panelAnimation : Array<string> = ["Klaus", "Le Cauchemar du loup", "La mer des monstres", "Bubble", "Kung Fu Panda", "BigFoot"];

	panelHorreur : Array<string> = ["Freddy les griffes de la nuit", "Sinister", "Le Cabinet des Curiosités", "Stranger Things", "Dahmer", "Kingdom", "Saw", "Halloween"];
	
	panel : Array<Array<string>> = [this.panelComedie, this.panelSF, this.panelAnimation, this.panelHorreur];

	dict = new Map<string, Array<string>>();

	movieTitles : Array<string> = [];

	constructor() {}

	ngOnInit(): void {
		/*
		let movieDetail = getMovie(550);

		console.log("MovieDetail : " + movieDetail);

		for(let i=0 ; i <this.panelGenre.length ; i++ ) {
			this.dict.set(this.panelGenre[i], this.panel[i]);
		} 
		*/
		var randMovie = Math.floor(Math.random() * 100);

		(async () => {
			var movieTitle = await getData(randMovie);
			//console.log("Valeur : " + movieTitle.values());
			
			this.movieTitles.push(movieTitle.title);
			console.log("movieTitles : " + this.movieTitles);
			return this.movieTitles;
		});

		
	}
}

