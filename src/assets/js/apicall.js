//const { resolve } = require("@angular/compiler-cli");
//import { HttpBackend, HttpClient, HttpXhrBackend } from '@angular/common/http'

const APIKey = '15abdf99fb623409a747e0f158f9ef01';
const BASEURL = "https://api.themoviedb.org/3/";

function getMovie(idMovie){
	var apiUrl = BASEURL+"movie/"+idMovie+"?api_key="+APIKey;
	return new Promise((resolve, reject) => {
		fetch(apiUrl)
		.then(response => {
			response.json().then(data => {
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
				resolve(data);
			});
		})
		.catch(e => {
			console.log(e);
			reject(e);
		});
	})
};
  function getData(){
	var listeGlobale = [];
	return new Promise((resolve, reject) => {
		fetch('http://localhost:80/angular.php').then(data => { //fichier PHP appelé C:\xampp\htdocs\angular.php
			data = data.json();
			 resolve(data);
	}
		).catch(function (e){
			console.log(e);
		}
		)})
      }


	//en cas de besoin d'attendre
	function delay(second){
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve("ok"); // After 3 seconds, resolve the promise with value ok
        }, second);
      })
    };
