import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TradeService } from './services/trade/trade.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zerodha-trading-bot-ui';

  constructor(private router: Router,
    private tradeService: TradeService) {
    if (window.location.search && window.location.search.indexOf("request_token") != -1) {
      const urlParams = new URLSearchParams(window.location.search);
      const requestToken = urlParams.get('request_token');
      tradeService.postRequestToken(requestToken).pipe(take(1)).subscribe(result => {
        console.log("Posted Requested Token");
      })
    }
  }

  navigateToHome() {
    this.router.navigate(['dashboard']);
  }
}
