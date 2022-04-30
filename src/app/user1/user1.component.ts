import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
// name:string;
@Input('user') name:string;
  constructor() { 
    // this.name="user";
  }

  ngOnInit(): void {
  }

}
