import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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


		
      var scrollState = "top";
  
      $(window).scroll(function() {
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
      $("#title-main h1").delay(firsttime).animate({"font-size": "32px", "margin-bottom": "16px"}).delay(secondtime).animate({"font-size": "64px", "margin-bottom": "0"});
  
  }

}
