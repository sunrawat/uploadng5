import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  user: any = [
    {name: 'suraj'},
    {name: 'sanjay'}
];

  constructor() { }

  ngOnInit() {
  }

}
