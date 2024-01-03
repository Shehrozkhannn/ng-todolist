import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user: any;
  constructor(private userDataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // this.user = this.userDataService.selectedUser;
    this.user = localStorage.getItem("userDetails");
    this.user = JSON.parse(this.user);
    
    
  }

  removeUser() {
    localStorage.removeItem("userDetails");
    this.router.navigate(['']);
  }

}
