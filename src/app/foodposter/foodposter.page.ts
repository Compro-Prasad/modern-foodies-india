import { Component, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { NavController } from '@ionic/angular';
import { DishService } from '../../../shared/dish/dish.service';
import $ from 'jquery';
import anime from "animejs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../../../shared/Session/session.service';
// Receive Parameter
import { ActivatedRoute } from '@angular/router';
export interface FoodCard {
  userID: string;
  dishName: string;
  dishPrice: string;
  noOfServings:number;
  foodDesc:string;
  isPublished:boolean;
  isVeg:boolean;
  serialNo:number;
  address:string;
  delivery:boolean;
  cuisine:string;
  img:FormData;
}

const URL = 'https://petuks.com:8080/upload/';
@Component({
  selector: 'app-foodposter',
  templateUrl: './foodposter.page.html',
  styleUrls: ['./foodposter.page.scss'],
})
export class FoodposterPage implements OnInit {
  selectedFile: File
  foodCard: FoodCard = <FoodCard>{};
  Foodname: string;
  Fooddesc: string;
  Cuisinename: string;
  deliverytype:string;
  servings:number;
  wlocation:string;
  isLinear = false;
  zerothFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  dish_img_loc:string;
userid:string;
loginStatus: boolean;
  currentloc: string;
  route_did:string;


  //get dish by id variables
  cuisine: string;
  dishName: string;
  dishDesc: string;
  noOfServings: string;
  deliveryOption: string;
  dishLoc: string;
  isVeg: boolean;


  constructor( private route: ActivatedRoute, public http: HttpClient, public sessionService: SessionService,public toastController: ToastController, private navCtrl: NavController, private _formBuilder: FormBuilder, public dishService: DishService) { }
  


  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    // additionalParameter:[{"fileData":  this.getCookie(this.userid+"_dishId") }],
    itemAlias: 'myFile',
    allowedFileType: ['image', 'pdf']
    });
    

 

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file) ;
 

  }

  

  getCookie(cname) {
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your FOOD have been added successfully.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  ionViewWillEnter() {


    anime({
      targets: '.menu',
      translateX: 0
    });
    anime({
      targets: '.list-x',
      translateY: 0
    });


  }
  ngOnInit() {
    
 
    this.route.params.subscribe(params => {
      this.route_did = params['did']; 
      if(this.route_did !=undefined){
      this.dishService.GetDishId(this.route_did).subscribe(
        response => {
          console.log("Dish id response "+JSON.stringify(response)); 

          this.cuisine = response.cuisine;
          this.dishName = response.dishName;
          this.dishDesc = response.foodDescription;
          this.noOfServings= response.noOfServings;
          this.deliveryOption = response.delivery;
          this.dishLoc= response.address;
          this.isVeg = response.isVeg;


        //update spome globals here such as image and booleans 
        this.dish_img_loc = "../../assets/images/"+this.route_did;
        console.log(this.dish_img_loc);
        this.foodCard.isVeg = this.isVeg;
        this.deliverytype = this.deliveryOption;
    

      
        },
        err => console.log(err)
      );

      }
 });

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('fileData' , this.getCookie(this.userid+"_dishId") );
     let dishId = this.getCookie(this.userid+"_dishId");
     this.dish_img_loc = "../../assets/images/"+dishId;
     };
//     this.uploader.uploadAll();
//     this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
//    if(response){
//     console.log("response"+JSON.stringify(response));
//   }
//  }



    this.loginStatus = false;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this._formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });




    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log(response[0].userId); 
          if(response != null){
            this.loginStatus = true;
  
            }else{
              this.loginStatus = false;
              //delete cookies in the broweser if session is not found in server for the particular access token 
            document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          //  document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }     
        },
        err => console.log(err)
      );
      // this.navCtrl.navigateForward("postmyfood");
      this.dishService.GetDishId(this.userid).subscribe(
        response => {
          console.log(response);
        }
      );




    }
    
    this.currentloc = getCookie("foodali_address");

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
  zero() {
    console.log(this.eighthFormGroup.value);
    this.foodCard.cuisine = this.eighthFormGroup.value.eighthCtrl;
    this.Cuisinename = this.foodCard.cuisine;
    var data = {"cuisine":this.foodCard.cuisine, "uId":this.userid };

    this.dishService.CreateDish(data).subscribe(
      response => {
       console.log(response.id);
       setCookie(this.userid+"_dishId",response.id,1);
       function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString;
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      },
      err => console.log(err)
    );
  }
  form1() {
    console.log(this.firstFormGroup.value);
    this.foodCard.dishName = this.firstFormGroup.value.firstCtrl;
    this.Foodname = this.foodCard.dishName;
 
  }
 
  form2() {
    console.log(this.secondFormGroup.value);
    this.foodCard.foodDesc = this.secondFormGroup.value.secondCtrl;
    this.Fooddesc = this.foodCard.foodDesc;
  }
  form3() {
    console.log(this.thirdFormGroup.value);
  }
  form4() {
    console.log(this.fourthFormGroup.value);
    this.foodCard.noOfServings = this.fourthFormGroup.value.fourthCtrl;
    this.servings = this.foodCard.noOfServings;
  }
  form5() {
    console.log(this.fifthFormGroup.value);
    
    this.foodCard.delivery = this.fifthFormGroup.value.fifthCtrl;
   
    if (this.foodCard.delivery == true){
      this.deliverytype = "Delivery";
    }else{
      this.deliverytype = "Pick-up Only";
    }
   
  }
  form6() {
    console.log(this.sixthFormGroup.value);
    this.foodCard.address = this.sixthFormGroup.value.sixthCtrl;
    this.wlocation = this.foodCard.address;
  }
  form7() {
    console.log(this.seventhFormGroup.value);
   
    this.foodCard.isVeg = this.seventhFormGroup.value.seventhCtrl;
    if(this.foodCard.isVeg == true){
      $(".veg").fadeIn(1);
      $(".nonveg").fadeOut(1);
    
    }else{
      $(".nonveg").fadeIn(1);
      $(".veg").fadeOut(1);

    }

  }




  // file upload spring ref 
  // https://stackoverflow.com/questions/49845355/spring-boot-controller-upload-multipart-and-json-to-dto
 






  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
  onUpload() {
    // upload code goes here
    // this.http is the injected HttpClient
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile);
  
  uploadData.forEach((value, key) => {
    console.log(key + " " + value)
    console.log(JSON.stringify(value));
  });

  this.foodCard.img = uploadData;


  
  this.http.post('https://petuks.com:8080/upload', uploadData, {
    reportProgress: true,
    observe: 'events'
  }).subscribe(event => {
      console.log(event); // handle event here
    });


  }
  goFoodInfo(){
    this.navCtrl.navigateForward("foodinfo");
  }
  createFoodcard(){
    console.log(this.foodCard);
    var data = {"dishName":this.foodCard.dishName, "foodDescription":this.foodCard.foodDesc, "noOfServings": this.foodCard.noOfServings, "delivery":this.foodCard.delivery, "address":this.foodCard.address,"isVeg":this.foodCard.isVeg,"Image":this.foodCard.img};
    var dId =  this.getCookie(this.userid+"_dishId");

    console.log("data to push ~~~~ "+JSON.stringify(data))
    console.log("dish id ~~~~"+ dId)

    this.dishService.UpdateDishById(dId, data).subscribe(
      response => {
       console.log(response);
       //once the dish is updated remove the cookie of dishid
       document.cookie = this.userid+'"_dishId"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      },
      err => console.log(err)
    );  
    this.presentToast()
    this.navCtrl.navigateForward('manage');
  }
  goHome(){
    this.navCtrl.navigateForward("home");
  }
  showsearch(){
    $(".search-component").fadeIn(200);
  }
  profilePage() {
    this.navCtrl.navigateForward('profile');
  }
}
