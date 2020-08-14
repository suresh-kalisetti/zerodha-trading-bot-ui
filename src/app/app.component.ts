import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zerodha-trading-bot-ui';

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['dashboard']);
  }
}
