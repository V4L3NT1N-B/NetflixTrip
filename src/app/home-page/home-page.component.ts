import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { parseHostBindings } from '@angular/compiler';
declare var getMovie : any;
declare var getCasting : any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  BASEURLimg : string = "https://image.tmdb.org/t/p/w1280";

  moviePresentation : Array<string> = [];
  castingPresentation : Array<string> = [];

  constructor(private router: Router, private titleService:Title) {
    this.titleService.setTitle("Accueil - NetflixTrip");
   }

  ngOnInit(): void {
    this.router.navigate(['home']);

    //pour recevoir info avec redirect
    //si vide alors == 1

    //this.ident = history.state;
    //if (Object.values(this.ident)[0] == 1){
     // console.log("oui");
    //}

    //console.log(localStorage.getItem('login'));
    if (localStorage.getItem('mail') == null || localStorage.getItem('mdp') == null){
      this.router.navigate(['login']);  
    }

    var ch = this.router;
    $("#list-account ul li:last-of-type").on("click", function() {
      localStorage.clear();
      ch.navigate(['login']);
    });


		
    var scrollState = "top";

    $(window).on("scroll", function() {
      if(($(window).scrollTop() != 0 ) && (scrollState === "top")) {
        $(".align-header").css({"background-color": "#141414", "transition": "background-color 0.3s"});
        scrollState = "scrolled";
      }
      else if (($(window).scrollTop() === 0 ) && (scrollState === "scrolled")) {
        $(".align-header").css("background-color", "transparent");
        scrollState = "top";
      }
    });
    
  
    var firsttime = 3000;
    var secondtime = 10000;

    $(".synopsis").delay(firsttime).slideToggle(400).delay(secondtime).slideToggle(400);
    $(".netflix-production").delay(firsttime).animate({"height": "20px", "margin-right": "0"}).delay(secondtime).animate({"height": "35px", "margin-right": "10px"});
    $("#title-main h2").delay(firsttime).animate({"font-size": "16px"}).delay(secondtime).animate({"font-size": "24px"});

    //SOUS-MENUS
    $("#notification").on("mouseenter", function(){
      $("#menu-notification").fadeIn(150);
      $("#menu-notification").on("mouseleave", function(){
        $("#menu-notification").fadeOut(150);
      });
    });

    $("#account").on("mouseenter", function(){
      $("#menu-account").fadeIn(150);
      $("#menu-account").on("mouseleave", function(){
        $("#menu-account").fadeOut(150);
      });
    });

    //FILM DE PRESENTATION
    (async () => {
          var idMovie = Math.floor((Math.random() * 1000) + 1);
					var movie = await getMovie(idMovie);
          
					var movieTitle = movie.title;
					var URLmovie = movie.backdrop_path;
					var URLimg = this.BASEURLimg + URLmovie;
          var synopsis = movie.overview.substring(0, 300)
          var lastSynopsis = synopsis.substring(0, synopsis.lastIndexOf(".")+1);

          
          if(movieTitle !== undefined || URLmovie !== undefined || movie.overview !== undefined){
            this.moviePresentation.push(movieTitle);
            this.moviePresentation.push(lastSynopsis);
            this.moviePresentation.push(URLimg);
          }

          //Title size
          var titleLength = movieTitle.length;
          var titleSize = "";

          if(titleLength >= 15){
            titleSize = "45px";
            $("h1").css("font-size", titleSize);
          }
          else {
            titleSize = "64px";
          }

          $("#title-main h1").delay(firsttime).animate({"font-size": "32px", "margin-bottom": "16px"}).delay(secondtime).animate({"font-size": titleSize, "margin-bottom": "0"});


          var casting = await getCasting(idMovie);
          for(let i = 0 ; i < 3 ; i++){
            this.castingPresentation.push(casting.cast[i].name);
          }
		})();

    

  }

}
