import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TradeService } from './services/trade/trade.service';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zerodha-trading-bot-ui';

  constructor(private router: Router,
    private tradeService: TradeService,
    private _snackBar: MatSnackBar) {
    if (window.location.search && window.location.search.indexOf("request_token") != -1) {
      const urlParams = new URLSearchParams(window.location.search);
      const requestToken = urlParams.get('request_token');
      tradeService.postRequestToken(requestToken).pipe(take(1)).subscribe(result => {
        this.showSnackBar("Login Successful.");
      })
    }
  }

  navigateToHome() {
    this.router.navigate(['dashboard']);
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 3000,
    });
  }
}
