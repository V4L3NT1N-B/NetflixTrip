import { Component, OnInit } from '@angular/core';
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

			for (var i = 0; i<10; i++) {
				soustab.push(top.results[i].title);
				soustab.push(this.BASEURLimg + top.results[i].poster_path);
				this.movieTop.push(soustab);
				soustab = [];
			}
		})();
	}

}