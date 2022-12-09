//const { resolve } = require("@angular/compiler-cli");

const APIKey = '15abdf99fb623409a747e0f158f9ef01';
const BASEURL = "https://api.themoviedb.org/3/";

function getMovie(idMovie){
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

function getTop10(){
	var apiUrl = BASEURL+"movie/top_rated?api_key="+APIKey;
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