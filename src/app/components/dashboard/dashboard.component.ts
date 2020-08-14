import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade/trade.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isBotRunning = false;

  constructor(private tradeService: TradeService,
    private dialog: MatDialog,
    private router: Router) { }

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
    this.router.navigate(["logs/debug"]);
  }

  getTradeLogs() {
    this.router.navigate(["logs/trades"]);
  }

  postToken() {
    this.tradeService.restartBot().subscribe(result => {
      console.log(result);
    });
  }

}
