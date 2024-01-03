import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PizzaPartyComponentComponent } from '../pizza-party-component/pizza-party-component.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-usersname',
  templateUrl: './usersname.component.html',
  styleUrls: ['./usersname.component.css']
})
export class UsersnameComponent implements OnInit {
  userData : any = [];
  durationInSeconds: any = 5;
  userDetail = new FormGroup({
    tourist_name : new FormControl('' , Validators.required),
    tourist_email : new FormControl('' , Validators.required),
    tourist_location : new FormControl('' ,Validators.required),
  });
  userId: number = 0;
  buttonName: string = "Create New User";
  title: string = "Add User";

  constructor(private userDataService: DataService , private toastr: ToastrService) { }


  ngOnInit(): void {
    // this.userDataService.getUsers().subscribe((res:any) => this.userData = res.data);
    this.userDataService.getUsersNew().subscribe((res:any) =>{ this.userData = res.data
    console.log(res);
    });
    console.log(this.userDetail);  
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  selectUser(user: any) {
    this.userDataService.selectedUser = user;
    localStorage.setItem("userDetails", JSON.stringify(user));
  }

  createUser() {
    if (this.buttonName === "Create New User") {
      this.userDataService.createUser(this.userDetail.value).subscribe((res)=> this.userData.unshift(res));
      this.showSuccess()
    } else {
      try {
        this.userDataService.updateUser(this.userId, {...this.userDetail.value, id: this.userId}).subscribe(
          (res: any) => {
            if (!res) {
              console.log("No Data Found");
              
            } else {
              const user = this.userData.find((item:any) => item.id == this.userId);
              const userIndex = this.userData.indexOf(user);
              this.userData[userIndex] = res;
              this.buttonName = "Create New User";
              this.title = "Add user";
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
      } catch(e) {
        console.log(e); 
      }    
    }
    this.userDetail.reset();
  }

  deleteUser(id : number) {
    this.userDataService.deleteUsers(id).subscribe((res:any)=> {
      this.userData = this.userData.filter((item:any) => item.id !== res.id);
    });
  }

  updateUser(user: any) {
    this.userId = user.id;
    this.userDetail.patchValue(user);
    this.buttonName = "Update User";
    this.title = "Update User";
    
    // console.log(id,this.userDetail.value);
    console.log(user);
    
  }

 
}

