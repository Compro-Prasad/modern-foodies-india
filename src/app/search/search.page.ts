import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchedFor : string;

  constructor(public activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let val = this.activatedRoute.snapshot.paramMap.get('svalue');
    console.log("Searched for "+ val);
    this.searchedFor = val;
  }

}
