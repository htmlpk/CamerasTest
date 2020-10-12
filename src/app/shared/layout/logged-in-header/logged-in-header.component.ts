import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.User;
  }

  public logOut() {
    this.userService.logOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  public goToSettings() {
    this.userService.logOut().then(() => {
      this.router.navigate(['/profile']);
    });
  }

}
