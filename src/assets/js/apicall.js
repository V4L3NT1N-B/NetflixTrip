//const { resolve } = require("@angular/compiler-cli");

const APIKey = '15abdf99fb623409a747e0f158f9ef01';
const BASEURL = "https://api.themoviedb.org/3/";
var idMovie = 550;
/*
function apiCall(idMovie){
	var apiUrl = "https://api.themoviedb.org/3/movie/" + idMovie + "?api_key=77716ce9bcb4e7574dd77d96be1f3bd4";
	let data = fetch(apiUrl).then(data => {
		console.log("getData : " + data);
	});
	//let data = response.json();
	console.log("apiCall : " + data);
	return data;
}
*/
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
	}

	//getData().then(response => console.log("Response : " +response));

/*
function getData(url){
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => {
				if (response.status !== 200) {
					console.log(
						"Looks like there was a problem. Status Code: " + response.status
					);
					return; //returns undefined!
				}

				// Examine the text in the response
				response.json().then(data => {
					resolve(data);
				});
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
				reject(err)
			});
	})
}

async function getMovie(idMovie) {
	console.log("Chargement en cours des datas du film...");
	const data = await getData(BASEURL+"movie/" + idMovie + "?api_key="+APIKey).then(data => {
		console.log("In getData: " + data.original_title);
		return data;
	})
	console.log("In getMovie: " + data.original_title);
	return data;	
}

function movieTitle (){
	var movieTitles = [];
	var movieDetail = getData(550);
	console.log("Before Push : "+movieDetail.original_title);

	//for(let film of movieDetail.original_title){
		//console.log("inFor: "+film.original_title);
		movieTitles.push(movieDetail.original_title);
	//}

	console.log("movieTitles : " + movieTitles);
	return movieTitles;
}

const test = movieTitle()
console.log("Test" + test);
*/

