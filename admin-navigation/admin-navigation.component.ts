import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  sideToggle:boolean=true;
  constructor() { }

  ngOnInit(): void {
  
  }
  toggleClick(){
    if(!this.sideToggle)
    {
      this.sideToggle =true;
    }else
    {
      this.sideToggle = false;

    }
    
    console.log(this.sideToggle)
  }


}
