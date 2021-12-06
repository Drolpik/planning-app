import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'planning-app';

  sideBarOpen = true;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.initAuthListener();
  }

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
