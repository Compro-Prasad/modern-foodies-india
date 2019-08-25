import { Component, OnInit } from '@angular/core';

import $ from 'jquery';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  logmeout(){
  
    document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
 }
}
