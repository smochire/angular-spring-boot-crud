import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  faCoffee = faCoffee;
  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
}
