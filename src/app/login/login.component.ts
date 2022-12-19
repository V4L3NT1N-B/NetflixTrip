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
    //en arrivant sur la page de login le set user + mdp est reset pour pas bypass la page de login
    localStorage.clear();
    var ch = this.router;
    //var ident = this.ident;
    //on peut envoyer des messages en meme temps qu'un redirect info interessante

    (async () => {
      var liste = await getData();
      $("#submit").on('click', function(e){
        e.preventDefault();
        var mail = document.getElementById("mail") as HTMLInputElement | null;
        var mdp = document.getElementById("mdp") as HTMLInputElement | null;
        if (mail != null && mdp != null){
          for (var i =0; i<liste.length; i++){
            if (liste[i].login == mail.value){
              if (liste[i].mdp == mdp.value){
                //ident.push(smth);
                localStorage.setItem('login',mail.value);
                localStorage.setItem('mdp',mdp.value);
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
