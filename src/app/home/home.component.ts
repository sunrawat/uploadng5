import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userS: UserService) { }
  newUser: string;
  name;
  ngOnInit() {

    this.userS.cast.subscribe( user => {
      this.name = user;
    }
    );
  }
  changeUser() {
    this.userS.editUser(this.newUser);
    }
}
