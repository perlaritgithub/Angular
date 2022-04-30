import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';

enum Dir{
  Up ='Up',
  Down = 'down',
  Left = 'left'
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dir:'up' | 'down' |'left' |'right';
  
  name: string;
  user: string='';
  tup: [string, number];
  un: unknown;
  


  public updateName() {
    this.tup = ['user', 1];
    this.tup.push('ted');
    this.tup[0] = 'en';
    this.tup[1] = 1;
    let result: string = this.add( 1 , 5);
    console.log(this.tup);
    console.log(Dir.Up);
    console.log(Dir.Down);
    console.log(Dir.Left);
    console.log(this.un);
    console.log(result);
  }

test(): string{
  console.log('test');
  return 'pawan';
  
}

private  add(a: number, b:number): string{
  let result : number = a + b;
  return result.toString();
}
  constructor() {
this.updateName();
this.dir ='up';
this.dir ='right';
this.un ='ccc';
let pawan=this.test();
console.log(pawan);
this.un='toUppercase()';

  }
 
  ngOnInit(): void {
    
  }
    

}

