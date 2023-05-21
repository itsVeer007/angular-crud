import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public user:  User | any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.userService.createUser(this.user).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }

}
