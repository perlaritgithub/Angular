import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import{HttpClient}from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  Api='http://localhost:9876/nodeapp/'

  constructor(private Http:HttpClient) { }
  // postcomp(data:any){
  //   return this.Http.post<any>(this.Api + `data1`, data).pipe(map(res => {
  //     return res;
  //   },(error:any) => {
  //     return error;
  //   }));
  // }

  postform(data:any){
    return this.Http.post<any>(this.Api + `postingdata`, data).pipe(map(res => {
      return res;
    },(error:any) => {
      return error;
    }));

  }
}
