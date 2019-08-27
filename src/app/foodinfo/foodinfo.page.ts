import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-foodinfo',
  templateUrl: './foodinfo.page.html',
  styleUrls: ['./foodinfo.page.scss'],
})
export class FoodinfoPage implements OnInit {
   constructor(public activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let val = this.activatedRoute.snapshot.paramMap.get('uid');
    console.log("User id from link is "+ val);
  }
  toppings = new FormControl();
  toppingList: string[] = ['American','British','Caribbean','Chinese','French','Greek','Indian','Italian','Japanese','Mediterranean','Mexican','Moroccan','Spanish','Thai','Turkish','Vietnamese'];
}
