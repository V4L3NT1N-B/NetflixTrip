import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';
declare var getData : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  @Input() data: Observable<any> = new Observable<Array<"string"[]>>();

  mailChanged(value: any){
    this.data = value;
  }

  constructor(private router: Router, private titleService:Title) {
    this.titleService.setTitle("NetflixTrip");
   }
  myform: any
  ident: Array<Array<string>> = []

  ngOnInit(): void {
    var clickedMAIL = false;
    var clickedMDP = false;
    
	this.router.navigate(['login']);

	if (localStorage.getItem('checked?') == "false" || localStorage.getItem("checked?") == null){
	  localStorage.clear();
	} else {
	  var mail1 = document.getElementById("mail") as HTMLInputElement | null;
	  var mdp1 = document.getElementById("mdp") as HTMLInputElement | null;
	  $("#mail").val() == localStorage.getItem('mail');
	  if (mail1 != null && mdp1 != null){
		mail1.value = String(localStorage.getItem('mail'));
		mdp1.value = String(localStorage.getItem('mdp'));
    this.router.navigate(['home']);
	  }
	}
  interval(100).subscribe(() => 
  (async () => {
    if (clickedMAIL){
          if (String($("#mail").val()).length < 5 && String($("#mail").val()).length != 0) {
            //cas si lettre alors mail sinon telephone
            if ( /[a-zA-Z]/.test(String($("#mail").val()))){
              //type adresse
              $('#mail').parents().parents().children(".error").text(errorMessage.substring(0, 34) + errorMessage.substring(60,68));
              $('#mail').parents().parents().children(".error").css("display", "contents");
              if(!$('#mail').parents(".input-error").hasClass("changed")){
                $('#mail').parents(".input-error").toggleClass("changed");
              }
            } else {
              //type telephone
              $('#mail').parents().parents().children(".error").text(errorMessage.substring(0,15) + errorMessage.substring(37, errorMessage.length));
              $('#mail').parents().parents().children(".error").css("display", "contents");
              if(!$('#mail').parents(".input-error").hasClass("changed")){
                $('#mail').parents(".input-error").toggleClass("changed");
              }
            }
          } else if (String($("#mail").val()).length != 0){
            $('#mail').parents().parents().children(".error").css("display", "none");
            if($('#mail').parents(".input-error").hasClass("changed")){
              $('#mail').parents(".input-error").removeClass("changed");
            }
          }
          else {
            $('#mail').parents().parents().children(".error").text(errorMessage);
          }
        }

          if(clickedMDP){
            if($("#mdp").val() == "" || String($("#mdp").val()).length <= 3){
              $('#mdp').parents().parents().children(".error").css("display", "contents");
              if(!$('#mdp').parents(".input-error").hasClass("changed")){
                $('#mdp').parents(".input-error").toggleClass("changed");
              }
            } else {
              $('#mdp').parents().parents().children(".error").css("display", "none");
              if($('#mdp').parents(".input-error").hasClass("changed")){
                $('#mdp').parents(".input-error").removeClass("changed");
              }
            }
          }
        })()
  )
              

	//en arrivant sur la page de login le set user + mdp est reset pour pas bypass la page de login
	var ch = this.router;
	//var ident = this.ident;
	//on peut envoyer des messages en meme temps qu'un redirect info interessante
  const errorMessage = $('#mail').parents().parents().children(".error").html();


  (async () => {
    $("#mail").on('click', function(event) { 
      $(document).on('click', function(event) {
        var $target = $(event.target);
        if(!$target.closest('#mail').length) {
          clickedMAIL = true;
          if($("#mail").val() == ""){
            $('#mail').parents().parents().children(".error").text(errorMessage);
            $('#mail').parents().parents().children(".error").css("display", "contents");
            if(!$('#mail').parents(".input-error").hasClass("changed")){
              $('#mail').parents(".input-error").toggleClass("changed");
            }
          } else if (String($("#mail").val()).length < 5) {
            //cas si lettre alors mail sinon telephone
            if ( /[a-zA-Z]/.test(String($("#mail").val()))){
              //type adresse
              $('#mail').parents().parents().children(".error").text(errorMessage.substring(0, 34) + errorMessage.substring(60,68));
              $('#mail').parents().parents().children(".error").css("display", "contents");
              if(!$('#mail').parents(".input-error").hasClass("changed")){
                $('#mail').parents(".input-error").toggleClass("changed");
              }
            } else {
              //type telephone
              $('#mail').parents().parents().children(".error").text(errorMessage.substring(0,15) + errorMessage.substring(37, errorMessage.length));
              $('#mail').parents().parents().children(".error").css("display", "contents");
              if(!$('#mail').parents(".input-error").hasClass("changed")){
                $('#mail').parents(".input-error").toggleClass("changed");
              }
            }
          } else {
            $('#mail').parents().parents().children(".error").css("display", "none");
            if($('#mail').parents(".input-error").hasClass("changed")){
              $('#mail').parents(".input-error").removeClass("changed");
            }
          }
          }
        })
      });        

    $("#mdp").on('click', function(event) { 
      $(document).on('click', function(event) { 
        var $target = $(event.target);
        if(!$target.closest('#mdp').length) {
          clickedMDP = true;
          if($("#mdp").val() == ""){
            $('#mdp').parents().parents().children(".error").css("display", "contents");
            if(!$('#mdp').parents(".input-error").hasClass("changed")){
              $('#mdp').parents(".input-error").toggleClass("changed");
            }
          } else {
            $('#mdp').parents().parents().children(".error").css("display", "none");
            if($('#mdp').parents(".input-error").hasClass("changed")){
              $('#mdp').parents(".input-error").removeClass("changed");
            }
          }
        }
      })        
    })

})();


	(async () => {
		var liste = await getData();
		$('#submit').on("click", function(e){
			e.preventDefault();
			var mail = document.getElementById("mail") as HTMLInputElement | null;
			var mdp =  document.getElementById("mdp") as HTMLInputElement | null;
			var check=$("#sign-in-info input").is(":checked");

			if (mail != null && mdp != null){
				for (var i =0; i<liste.length; i++){
					if (liste[i].login == $("#mail").val()){
						if (liste[i].mdp == $("#mdp").val()){
							//ident.push(smth);
							localStorage.setItem('mail',String($("#mail").val()));
							localStorage.setItem('mdp',String($("#mdp").val()));
							localStorage.setItem('checked?', String(check));
              localStorage.setItem('id', String(liste[i].id));
							//redirect
							ch.navigate(['home']);
							//ch.navigate(['home'], {state: {data: ident}});
							//pour envoyer le message avec
						}
					}
				}
			}
		})

	})();
  }

}
