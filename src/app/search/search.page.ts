import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../shared/user/user.service';
import { DishService } from '../../../shared/dish/dish.service';
import { TransService } from '../../../shared/trans/trans.service';
import { Router } from '@angular/router';
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

  request: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {
  searchedFor : string;
  dish : Array<Dish>;

  isit: number;
  r:boolean;
    userid: string;
    cookid: string;
    chIf: string;
    count: number;
    k: number;
    loc:string;
    fullloc:string;
  
    //cook info
    cookPhone: string;
    cookName :string;
    cookCuisine: Array<string>;
    cookVeg:boolean;

  constructor(private router: Router, public dishService: DishService, public activatedRoute : ActivatedRoute, public userService : UserService, public transService : TransService, public sessionService : SessionService) { }

  ngOnInit() {
    let val = this.activatedRoute.snapshot.paramMap.get('svalue');
    console.log("Searched for "+ val);
    this.searchedFor = val;


    this.isit = 0;
    this.count = 0;
    this.k = -1;
  

    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log("Session id : customer "+response[0].userId);
          this.dishService.GetDishId(this.activatedRoute.snapshot.paramMap.get('did')).subscribe(
            response => {
              //this.dish = response;
              console.log("Dishes info below");
              console.log(response.uId);
              this.cookid = response.uId;


              this.userService.GetUserById(this.cookid).subscribe(
                response => {
                  console.log(response);
                this.cookPhone = response.phoneNo; 
                this.cookName = response.cookName;
                this.cookCuisine = response.cuisines;
                this.cookVeg = response.isVeg;
                },
                err => {
                  console.log(err);
                }
              );
          

              this.dishService.GetAllDishesId(response.uId).subscribe(
                response => {
                  this.dish = response;
                  console.log(response);
                  console.log("dishes  " + this.dish.length);

                  for (var i = 0; i < this.dish.length; i++){
                    console.log("----------------------------");
                    console.log("dish id > "+this.dish[i].id);
                    console.log("cook id > "+this.cookid);
                    console.log("user id > "+this.userid);
                    this.transService.GetTrans(this.userid, this.cookid,  this.dish[i].id).subscribe(
                      response => {
                         this.k += 1;          
                         
                         console.log("transaction call "+this.k+" -> "+response)
                         if(response == "null"){
                           this.r = false;
                         }else{
                           this.r = true;
                         }
                        
                        this.dish[this.k].request = this.r;
                        //for (var j = 0; j < this.dish.length; j++){
                        console.log("this.dish["+this.k+"].request  "+ this.dish[this.k].request);
                        this.r = false;
                        //}
                      },
                      err => {
                        console.log(err);
                      }
                    );


                }
                this.k = -1;
              
                }
              );
            }
          );
        },
        err => console.log(err)
      );
      // this.navCtrl.navigateForward("postmyfood");
      console.log("use id is " + this.userid);




    }
   //set user session location in the search field on the load of app 
   var ses_lc = getCookie("foodali_address");
   console.log("Session location is " + ses_lc);
   if (ses_lc != null) {
     let str = ses_lc;
     this.loc  =  str.substring(0, 20)+"...";
     this.fullloc = str;
   } else {
     console.log("Session location is not found");
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




    this.dishService.GetAllDishesBySearch(this.searchedFor).subscribe(
      response => {
        console.log(response);
        this.dish = response;
      },
      err => console.log(err)
    );


  }
  goFoodInfo( id:string){
    console.log(id);
    this.router.navigate(['/foodinfo', {did : id}]);
  }
  onCancel(event) {
    this.router.navigate(["/postmyfood"]);
  }
  search(q: string) { 
    console.log("searched value is "+q); 
    this.router.navigate(['/search', { svalue: q }]);
}
}
