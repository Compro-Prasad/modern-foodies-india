import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


// import { SocialUser } from "angularx-social-login";
import { DishService } from '../../../shared/dish/dish.service';

export interface Dish{
  id:string;
	userID:string;
	dishName:string;
	dishPrice:string;
	noOfServings:string;
	foodDescription:string;
	publishStatus:boolean;
	isVeg:boolean;
	serialNo:number;
	address:string;
	delivery:string;
	cuisine:string;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {
  
  dish:Dish;
  dish2:Dish;

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
  
  constructor(public dishService: DishService) { }

  ngOnInit() {
    this.dishService.GetAllDishes().subscribe(
      response => {
        console.log(response);
        this.dish =response;
      },
      err => console.log(err)
    );
  }
  toppings = new FormControl();
  toppingList: string[] = ['American','British','Caribbean','Chinese','French','Greek','Indian','Italian','Japanese','Mediterranean','Mexican','Moroccan','Spanish','Thai','Turkish','Vietnamese'];
 
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
}
