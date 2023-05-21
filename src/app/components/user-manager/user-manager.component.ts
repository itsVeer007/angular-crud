import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getContactsFromServer()
  }

  getContactsFromServer() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(data)
    })
  }

  onDelete(userId: string | undefined) {
    if(userId) {
      this.userService.deleteUser(userId).subscribe((data) => {
        this.getContactsFromServer()
      })
    }
  }

}
