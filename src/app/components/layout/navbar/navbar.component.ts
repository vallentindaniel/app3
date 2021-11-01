import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin: boolean;
  isAdmin: boolean;
  username: string;

  constructor() { 
    this.isLoggedin = true;
    this.isAdmin = true;
    this.username= '';
  }

  logout(){

  }

  ngOnInit(): void {
  }

}
