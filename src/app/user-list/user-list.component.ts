import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';

import {UserService} from '../user-service.service';
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  faDelete = faTrash;
  faUpadte = faPenToSquare;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  onDelete(id: number) {
    this.userService.delete(id);
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
