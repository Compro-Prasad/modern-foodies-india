import * as $ from 'jquery';
import { Component, Inject } from '@angular/core';

import { NavController } from '@ionic/angular';
import anime from 'animejs';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";


//Social page login ref 
// https://www.npmjs.com/package/angularx-social-login
// https://medium.com/@salonimalhotra1ind/angular4-social-login-e9c7abf04e62

// best dialog
// https://www.techiediaries.com/angular-material-dialogs/


//import anime from 'animejs/lib/anime.es.js';
//import anime from 'animejs/lib/anime.es.js';
//const anime = require('animejs/lib/anime.es.js');
// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  user: SocialUser;
  loggedIn: boolean;


  loc: string;
  ifloggedin: string;

  title = "Example Angular Material Dialog";
  constructor(private navCtrl: NavController, private dialog2: MatDialog, private authService: AuthService) { }
  selected = 'option1';
  // constructor(private navCtrl: NavController, public dialog: MatDialog) {}

  // Ionic life cycles : https://ionicframework.com/blog/navigating-lifecycle-events/

  ionViewWillEnter() {
    this.ifloggedin = "Log in"
    anime({
      targets: '.el',
      translateX: 0
    });


    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: function (el, i) {
          return 50 * i;
        }
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: function (el, i) {
          return 34 * (i + 1)
        }
      }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

  }
  ngOnInit() {



    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  // IF LAZY-LOADED
  goAnOtherPage() {
    this.navCtrl.navigateForward('location');
  }
  getLoc() {
    this.loc = "Airoli, Sector 9";
    this.navCtrl.navigateForward('afterlogin');
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog2.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog data found at home page : ${result.message}`);
      if (result.message == "googlein"){ 
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      }else if(result.message == "fbin"){
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }else{
      this.ifloggedin = "You are now logged in";
      document.getElementById("login-icon").style.display = "none";
      var b = document.querySelector("ion-button");
      b.setAttribute("color", "dark");
      b.setAttribute("disabled", "");
      document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
      $("#locateme").addClass("focal");
      $(".searchbar-input").focus();
      }
    });
  }



  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}


