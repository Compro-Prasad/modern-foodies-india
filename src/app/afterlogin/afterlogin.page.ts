import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import * as $ from 'jquery';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.page.html',
  styleUrls: ['./afterlogin.page.scss'],
})
export class AfterloginPage implements OnInit {

  constructor() { }
  ionViewWillEnter() { 
    $('#card1').fadeIn(500);
    anime({
      targets: '.ell',
      translateX:  0
  });


}
  ngOnInit() {
  }
moreinfo(){
  $("#card1").fadeOut(200,function(){
    $('#card2').fadeIn(500);
  });

}
}
