import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
btnStatus:boolean=true; 
name:string='test';
users:string[];
swathi:any='17';
ramya:boolean=false;
users1:string[]=[];
  constructor() { 
    this.toggleBtnStatus();
  }
toggleBtnStatus(){
  setTimeout(()=>this.btnStatus=true, 3000);
}

//updateName(event:any){
//this.name=event.target.value;
//}
createUser(name:string){
  console.log(name);
  
  if(name !=''){
    // console.log(this.name);
    this.users1.push(name);
   
    // //this.name = '';
    // console.log(typeof this.users);
    // console.log(typeof this.swathi);
    // console.log(typeof this.ramya);
    // console.log(typeof this.users1);
    
  }

}
  ngOnInit(): void {
  }


}
