import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
private user  = new BehaviorSubject<string>('java');
cast = this.user.asObservable();

Users = [
	{
	name : "suraj"
	}
]

editUser(newUser){
	this.user.next(newUser);

} 
  constructor( ) { }
  getFirstUser(){
  	return this.Users[0];
  }
}
