import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade/trade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isBotRunning = false;

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.botHealth();
  }

  botHealth() {
    this.tradeService.botHealth().subscribe(result => {
      this.isBotRunning = true;
    })
  }

  restartBot() {
    this.tradeService.restartBot().subscribe(result => {
      console.log(result);
    });
  }

  login() {
    
  }

  postToken() {
    this.tradeService.restartBot().subscribe(result => {
      console.log(result);
    });
  }

}
