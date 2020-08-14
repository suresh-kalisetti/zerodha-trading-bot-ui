import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradeService } from 'src/app/services/trade/trade.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logType: string = '';
  logs: string[] = [];

  constructor(private route: ActivatedRoute,
    private tradeService: TradeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.logType = params['type'];
      this.tradeService.getLogs(this.logType).subscribe(result => {
        console.log(result);
        this.logs = result.logs;
      })
    });
  }

}
