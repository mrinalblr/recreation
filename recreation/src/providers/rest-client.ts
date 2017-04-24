import { Injectable } from '@angular/core';
import { Http ,HttpModule, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the RestClient provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestClient {

   private registerUserUrl="http://localhost:9400/users/register";
   private loginUrl="http://localhost:9400/users/login";

  constructor(public http: Http) {
    console.log('Hello RestClient Provider');
  }
    registerUser(param){
      let headers = new Headers({ 'Content-Type':'application/json' });
     let options = new RequestOptions({ headers: headers });
    return this.http.post(this.registerUserUrl, param,options)
      .map(res => res.json());
   }
   login(param){
       let headers= new Headers({'Content-Type':'application/json'});
       let options = new RequestOptions({headers:headers});
       return this.http.post(this.loginUrl,param,options)
       .map(res => res.json());
   }
}
