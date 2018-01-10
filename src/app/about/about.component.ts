import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private userS: UserService) { }
  newUser: string;
  name;
  ngOnInit() {

    this.userS.cast.subscribe( user => {
      this.name = user;
    }
    );
  }
}
