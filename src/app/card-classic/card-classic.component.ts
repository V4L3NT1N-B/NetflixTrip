import { Component, OnInit, Input, } from '@angular/core';


@Component({
	selector: 'app-card-classic',
	templateUrl: './card-classic.component.html',
	styleUrls: ['./card-classic.component.css']
})
export class CardClassicComponent implements OnInit {

	@Input()
	panelGenre : Array<string> = [];

	panel : Array<string> = [];

	panelComedie : Array<string> = ["After Life", "Friends", "Brooklyn Nine-nine", "Five", "Presque", "The End of the F*cking World", "Familly Business", "", "", "", ""];

	panelSF : Array<string>  = ["Sense8", "Lock And Key", "The 100", "Umbrella Academy", "Lucifer", "The Flash", "Alice in Borderland", "Daredevil", "Ragnarök"];

	panelAnimation : Array<string>  = ["Klaus", "Le Cauchemar du loup", "La mer des monstres", "Bubble", "Kung Fu Panda", "BigFoot"];

	panelHorreur : Array<string>  = ["Freddy les griffes de la nuit", "Sinister", "Le Cabinet des Curiosités", "Stranger Things", "Dahmer", "Kingdom", "", ""];

	constructor() {}

	ngOnInit(): void {

		for(const genre of this.panelGenre) {
			if(genre == "Comédie"){
				this.panel = this.panelComedie;

			}else if(genre == "SF et Fantastique"){
				this.panel = this.panelSF;
			}
		}
	}

}
