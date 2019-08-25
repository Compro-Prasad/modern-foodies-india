import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { DishService } from '../../../shared/dish/dish.service';
import $ from 'jquery';

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

  constructor( public toastController: ToastController, private navCtrl: NavController, private _formBuilder: FormBuilder, public dishService: DishService) { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your FOOD have been added successfully.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {

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
  }
  zero() {
    console.log(this.eighthFormGroup.value);
    this.foodCard.cuisine = this.eighthFormGroup.value.eighthCtrl;
    this.Cuisinename = this.foodCard.cuisine;
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


  
  // this.http.post('my-backend.com/file-upload', uploadData, {
  //   reportProgress: true,
  //   observe: 'events'
  // }).subscribe(event => {
  //     console.log(event); // handle event here
  //   });


  }
  goFoodInfo(){
    this.navCtrl.navigateForward("foodinfo");
  }
  createFoodcard(){
    console.log(this.foodCard);
    var data = {"cuisine":this.foodCard.cuisine,"dishName":this.foodCard.dishName, "foodDescription":this.foodCard.foodDesc, "noOfServings": this.foodCard.noOfServings, "delivery":this.foodCard.delivery, "address":this.foodCard.address,"isVeg":this.foodCard.isVeg,"Image":this.foodCard.img };
    this.dishService.CreateDish(data).subscribe(
      response => {
       console.log(response);
      },
      err => console.log(err)
    );  
    this.presentToast()
    this.navCtrl.navigateForward('manage');
  }
}
