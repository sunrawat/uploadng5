import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersdetail',
  templateUrl: './usersdetail.component.html',
  styleUrls: ['./usersdetail.component.scss']
})
export class UsersdetailComponent implements OnInit {
  name = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(param => {
      this.name = param.name;
    });
  }

}
