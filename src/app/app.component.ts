import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './service/user.service'
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
  name:string = '';
  constructor(private httpClient: HttpClient, private userservice: UserService){
  }
//console.log(this.userservice.getFirstUser());
getProfile(){
	this.httpClient.get(`https://rxjs-9dc0c.firebaseio.com/data.json?name=${this.name}`, {responseType: 'json'}).
	subscribe(
	(data)=>{
		console.log(data);
	}
	)
}

saveProfile(){
	this.httpClient.post(`https://rxjs-9dc0c.firebaseio.com/data.json`, {
	name : this.name,
	age : 12
	}).
	subscribe(
	(data:any)=>{
		console.log(data);
	},  err => {
		console.log('Something went wrong!');
	}
	);
}



 
  printName(e:any){
  	console.log(e.target.value)
  	this.name = e.target.value;
  }
}
