import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import{ApiserviceService} from './apiservice.service'
@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent implements OnInit {
  addform:FormGroup;

  constructor(private fb : FormBuilder,private service:ApiserviceService) 
  { 
    this.addform = this.fb.group({
    Firstname:[''],
    Secondname:[''],
    Email:[''],
    Password:[''],
  })
}

  ngOnInit(): void {
  }
addsub(){
  this.service.postform(this.addform.value).subscribe(
    res => {
      console.log(res);
      
    },
    error => {
      
    });


}


}
