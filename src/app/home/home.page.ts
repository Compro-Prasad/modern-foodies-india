import * as $ from 'jquery';
import { Component, Inject } from '@angular/core';

import { NavController } from '@ionic/angular';
import anime from 'animejs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
// import { AuthService } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// import { SocialUser } from "angularx-social-login";
import { UserService } from '../../../shared/user/user.service';
import { OtpService } from '../../../shared/Otp/otp.service';
import { SessionService } from '../../../shared/Session/session.service';
import { LatLng } from '@ionic-native/google-maps';



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
export class Otp {

  id: string;

  userId: string;
  otp: string;



}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // user: SocialUser;
  loggedIn: boolean;
  latlon: string;
  locationData: any;
  loc: string;
  isenabled:boolean=false;
  ifloggedin: string;


  access_token: string;
  request_token: string;
  user_id: string;

  title = "Example Angular Material Dialog";
  otp: string;
  constructor(private http: HttpClient, private navCtrl: NavController, private dialog2: MatDialog, public userService: UserService, public sessionService: SessionService, public otpService: OtpService) { }
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
        delay: 5000
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
        delay: 5000
      });
    // signInWithGoogle(): void {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }

    // signInWithFB(): void {
    //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // }

    // signOut(): void {
    //   this.authService.signOut();
    // }


    //set user session location in the search field on the load of app 
    var ses_lc = getCookie("foodali_address");
    console.log("Session location is " + ses_lc);
    if (ses_lc != null) {
      this.loc = ses_lc;


    if(this.loc !== ''){
      //enable the button
      this.isenabled=true; 
      }else{
      //disable the button
      this.isenabled=false;
      }

    } else {
      console.log("Session location is not found");
    }



    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {

     
          console.log("session response from server : "+response);
          if(response != null){
          this.ifloggedin = "Logged in";
          document.getElementById("login-icon").style.display = "none";
          var b = document.querySelector("ion-button");
          b.setAttribute("color", "dark");
          b.setAttribute("disabled", "");
          document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
          $("#locateme").addClass("focal");
          $(".searchbar-input").focus();
          }else{
            //delete cookies in the broweser if session is not found in server for the particular access token 
          document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          }

        },
        err => console.log(err)
      );
      // this.navCtrl.navigateForward("postmyfood");





    }





    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }


  }
  // ngOnInit() {



  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //   });
  // }

  // IF LAZY-LOADED
  goAnOtherPage() {
    this.navCtrl.navigateForward('location');
  }



  getLoc() {
    // var x = "";


    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    // } else { 
    //     console.log("Geolocation is not supported by this browser.");
    // }

    // function showPosition(position) {
    //   x = position.coords.latitude +"," + position.coords.longitude;

    // }
    // console.log(x);


    //normal search as non user

    navigator.geolocation.getCurrentPosition((loc) => {


      this.userService.GetMapData(loc.coords.latitude, loc.coords.longitude).subscribe(response => {
        var txt = JSON.stringify(response);
        var obj = JSON.parse(txt);
        var formatted_address = obj.results[0].formatted_address;
        console.log(formatted_address);
        setCookie("foodali_address", formatted_address, "1"); // expires in 1 day
        this.loc = formatted_address;

        if(this.loc !== ''){
          //enable the button
          this.isenabled=true; 
          }else{
          //disable the button
          this.isenabled=false;
          }
    

      },
        err => console.log(err)
      );

      console.log("this loc :" + this.loc);
      var d = new Date();
      // create cookie for address

    })
    console.log(this.loc + " temp loc")

  





    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString;
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    


  }
  forward(){
    if (this.loc == "") {
      //skip 
    } else {
    var user = getCookie("foodali_access_token");
      this.sessionService.GetSessionAccess(user).subscribe(
        response => {

          if(response == null){
            //user not logged in 
            this.navCtrl.navigateForward('postmyfood');
          }else{
            console.log("session response from server : "+response[0].userId);
         
          
          this.userService.GetUserById(response[0].userId).subscribe(
            response => {

              console.log("user response from server : "+response.cookName);
              //if user is cook, go to after login page, else redirect as default. 
              if (response.cookName != null){
                this.navCtrl.navigateForward('afterlogin');
              }else{

                this.navCtrl.navigateForward('postmyfood');
              }

            },
            err => console.log(err)
          );
        }
        },
        err => console.log(err)
      );


    };




    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog2.open(DialogBodyComponent, dialogConfig);





    dialogRef.afterClosed().subscribe(result => {





      console.log(`Dialog data found at home page : ${result.message}`);

      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      this.userService.GetUserId(result.message).subscribe(
        response => {

          if (response == null) {
            // Create a new account / Sign up
            var data = { "phoneNo": result.message };
            this.userService.CreateBug(data).subscribe(
              response => {

                this.access_token = uuidv4();
                this.request_token = uuidv4();

                setCookie("foodali_access_token", this.access_token, "3660");
                setCookie("foodali_request_token", this.request_token, "3660");

                var session_data = { "userId": response.id, "accessToken": this.access_token, "refreshToken": this.request_token };
                this.sessionService.CreateSession(session_data).subscribe(
                  response => {
                    console.log(response)

                  },
                  err => console.log(err)
                );

                //redirect ot chef info page
                // this.navCtrl.navigateForward('afterlogin');
                this.ifloggedin = "Signed up & logged in";
                document.getElementById("login-icon").style.display = "none";
                var b = document.querySelector("ion-button");
                b.setAttribute("color", "dark");
                b.setAttribute("disabled", "");
                document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
                $("#locateme").addClass("focal");
                $(".searchbar-input").focus();






              },
              err => console.log(err)
            );
          }

          console.log("user id for " + result.message + " is " + response.id);




          // now login the user 
          this.access_token = uuidv4();
          this.request_token = uuidv4();

          setCookie("foodali_access_token", this.access_token, "3660");
          setCookie("foodali_request_token", this.request_token, "3660");

          var session_data = { "userId": response.id, "accessToken": this.access_token, "refreshToken": this.request_token };
          this.sessionService.CreateSession(session_data).subscribe(
            response => {
              console.log(response)

            },
            err => console.log(err)
          );

          this.ifloggedin = "Logged in";
          document.getElementById("login-icon").style.display = "none";
          var b = document.querySelector("ion-button");
          b.setAttribute("color", "dark");
          b.setAttribute("disabled", "");
          document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
          $("#locateme").addClass("focal");
          $(".searchbar-input").focus();



          //DON'T PUT SESSION DATA OUTSIDE SINCE RESPONSE TAKES LONGER THAN SESSION DATA TAKES TIMEM TO MAKE SERVICE CALL

          // var user=getCookie("foodali_access_token");
          // console.log(user+" <<< session access token ");
          // if (user != "") {


          //   this.ifloggedin = "Hi "+user;
          //   document.getElementById("login-icon").style.display = "none";
          //   var b = document.querySelector("ion-button");
          //   b.setAttribute("color", "dark");
          //   b.setAttribute("disabled", "");
          //   document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
          //   $("#locateme").addClass("focal");
          //   $(".searchbar-input").focus();



          // } else {

          //    //all session of the user is deleted

          //     this.access_token = uuidv4();
          //     this.request_token = uuidv4();

          //     setCookie("foodali_access_token",this.access_token,"3660");
          //     setCookie("foodali_request_token",this.request_token,"3660");

          //     var session_data = {"userId":response.id,"accessToken":this.access_token, "refreshToken":this.request_token};
          //     this.sessionService.CreateSession(session_data).subscribe(
          //       response => {console.log(response)

          //       },
          //       err => console.log(err)
          //     ); 

          //     this.ifloggedin = "Hi "+user;
          //     document.getElementById("login-icon").style.display = "none";
          //     var b = document.querySelector("ion-button");
          //     b.setAttribute("color", "dark");
          //     b.setAttribute("disabled", "");
          //     document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
          //     $("#locateme").addClass("focal");
          //     $(".searchbar-input").focus();

          //   }




          //   }
          // }
          // checkResponse();




        },
        err => console.log(err)
      );



      this.access_token = "";
      this.request_token = "";

      //}
    });
  }



  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


