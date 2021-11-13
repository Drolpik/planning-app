import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planning-app';

  sideBarOpen = true;

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
