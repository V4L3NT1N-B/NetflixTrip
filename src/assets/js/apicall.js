//const { resolve } = require("@angular/compiler-cli");

const APIKey = '15abdf99fb623409a747e0f158f9ef01';
const BASEURL = "https://api.themoviedb.org/3/";

function getData(idMovie){
	var apiUrl = BASEURL+"movie/"+idMovie+"?api_key="+APIKey;
	return new Promise((resolve, reject) => {
		fetch(apiUrl)
		.then(response => {
			response.json().then(data => {
				//console.log("getData : "+data);
				resolve(data);
			});
		})
		.catch(e => {
			console.log(e);
			reject(e);
		});
	})
};




(async () => {
	var movie = await getData(550);			
	
	this.movieTitles.push(movie.title);
	console.log("movieTitles : " + this.movieTitles);
	return this.movieTitles;
});


//console.log(randMovie);

