import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;

  public userId: any;
  public user!: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'mobile': new FormControl(''),
      'photo': new FormControl(''),
    })

    this.activatedRoute.paramMap.subscribe((param) => {
      this.userId = param.get('userId')
      console.log(this.userId)
    });

    if(this.userId) {
      this.userService.getUser(this.userId).subscribe((data) => {
        this.user = data;
      })
    }
  }

  onUpdate() {
    if(this.userId) {
      this.userService.updateUser(this.user, this.userId).subscribe((data) => {
        this.router.navigate(['/'])})
    }
  }

}
