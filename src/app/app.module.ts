import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwathiComponent } from './swathi/swathi.component';
import { NewComponent } from './new/new.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularformComponent } from './angularform/angularform.component'
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { User1Component } from './user1/user1.component';



@NgModule({
  declarations: [
    AppComponent,
    SwathiComponent,
    NewComponent,
    FormComponent,
    AngularformComponent,
    UserComponent,
    User1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
