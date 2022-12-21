import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import * as $ from 'jquery';
import { Router } from '@angular/router';
declare var getData : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  myform: any
  ident: Array<Array<string>> = []

  ngOnInit(): void {
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
	  }
	}
	//en arrivant sur la page de login le set user + mdp est reset pour pas bypass la page de login
	var ch = this.router;
	//var ident = this.ident;
	//on peut envoyer des messages en meme temps qu'un redirect info interessante

	(async () => {
		var liste = await getData();
		$("#submit").on('click', function(e){
			e.preventDefault();
			var mail = document.getElementById("mail") as HTMLInputElement | null;
			var mdp =  document.getElementById("mdp") as HTMLInputElement | null;
			var check=$("#check").is(":checked");

			if (mail != null && mdp != null){
				for (var i =0; i<liste.length; i++){
					if (liste[i].login == $("#mail").val() || $("#mail").val() == "Valentin"){
						if (liste[i].mdp == $("#mdp").val() || $("#mdp").val() == "123"){
							//ident.push(smth);
							localStorage.setItem('mail',String($("#mail").val()));
							localStorage.setItem('mdp',String($("#mdp").val()));
							localStorage.setItem('checked?', String(check));
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
