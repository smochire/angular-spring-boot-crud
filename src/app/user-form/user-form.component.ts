import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../user-service.service';
import {User} from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
    this.route.params.subscribe(param => {
      if (param['id']) {
        this.userService.findAll().forEach((use: User[]) => {
          use.forEach((us) => {
            if (us.id == param["id"]) {
              this.user.id = us.id;
              this.user.email = us.email;
              this.user.name = us.name;
            }
          })
        })

      }
    });
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
