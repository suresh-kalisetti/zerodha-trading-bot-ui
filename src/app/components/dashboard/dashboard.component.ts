import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade/trade.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isBotRunning = false;

  constructor(private tradeService: TradeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.botHealth();
  }

  botHealth() {
    this.tradeService.botHealth().subscribe(result => {
      this.isBotRunning = true;
    })
  }

  restartBot() {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure you want to Restart the Server?',
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.tradeService.restartBot().subscribe(result => {
          console.log(result);
        }); 
      }
    });
  }

  login() {
    
  }

  getDebugLogs() {
    this.tradeService.getLogs("debug").subscribe(result => {
      console.log(result);
    })
  }

  getTradeLogs() {
    this.tradeService.getLogs("trades").subscribe(result => {
      console.log(result);
    })
  }

  postToken() {
    this.tradeService.restartBot().subscribe(result => {
      console.log(result);
    });
  }

}
