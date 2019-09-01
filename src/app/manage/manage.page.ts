import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import $ from 'jquery';

// import { SocialUser } from "angularx-social-login";
import { DishService } from '../../../shared/dish/dish.service';

import { SessionService } from '../../../shared/Session/session.service';
export interface Dish {
  id: string;
  uId: string;
  dishName: string;
  dishPrice: string;
  noOfServings: string;
  foodDescription: string;
  publishStatus: boolean;
  isVeg: boolean;
  serialNo: number;
  address: string;
  delivery: string;
  cuisine: string;

  request:boolean;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  dish: Array<Dish>;
  dish2: Array<Dish>;

  todo = [
    // '#1',
    // '#2',
    // '#3',
    // '#4'
  ];

  done = [
    // '#5',
    // '#6',
    // '#7',
    // '#8',
    // '#9'
  ];
  userid: string;

  constructor(public dishService: DishService, public sessionService: SessionService) { }

  ngOnInit() {
    // this.dishService.GetAllDishes().subscribe(
    //   response => {
    //     console.log(response);
    //     this.dish = response;
    //   },
    //   err => console.log(err)
    // );


    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") { 

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log(response[0].userId);    
          this.dishService.GetAllDishesId(response[0].userId).subscribe(
            response => {
              this.dish = response;
              console.log(response);
            }
          );  
        },
        err => console.log(err)
      );
      // this.navCtrl.navigateForward("postmyfood");
      console.log("use id is "+this.userid);
   




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
  toppings = new FormControl();
  toppingList: string[] = ['American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek', 'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  publish(id) {
    console.log("Publish id " + id);
    let data = { "publishStatus": 1 };
    this.dishService.UpdateDishById(id, data).subscribe(response => {
      console.log(response);
      $("#p"+id).fadeOut(1);
      $("#u"+id).fadeIn(1);
    },
      err => {console.log(err);  
        $("#p"+id).fadeOut(1);
      $("#u"+id).fadeIn(1);
    }
    );
  }
  unpublish(id) {
    console.log("Publish id " + id);
    let data = { "publishStatus": 0 };
    this.dishService.UpdateDishById(id, data).subscribe(response => {
      console.log(response);
      $("#p"+id).fadeIn(1);
      $("#u"+id).fadeOut(1);
    },
      err => {console.log(err);  
        $("#p"+id).fadeIn(1);
      $("#u"+id).fadeOut(1);
    }
    );
  }
}
