import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/services/trade/trade.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isBotRunning = false;

  constructor(private tradeService: TradeService,
    private dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.botHealth();
  }

  botHealth() {
    this.tradeService.botHealth().pipe(take(1)).subscribe(result => {
      this.isBotRunning = true;
      this.showSnackBar("Bot is live.");
    })
  }

  restartBot() {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure you want to Restart the Server?',
      }
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.tradeService.restartBot().pipe(take(1)).subscribe(result => {
          console.log(result);
          this.showSnackBar("Bot is restarting.");
        }); 
      }
    });
  }

  login() {
    const loginUrl = "https://kite.zerodha.com/connect/login?v=3&api_key=465j9ctjd7k8hvtr";
    window.location.href = loginUrl;
  }

  getDebugLogs() {
    this.router.navigate(["logs/debug"]);
  }

  getTradeLogs() {
    this.router.navigate(["logs/trades"]);
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 3000,
    });
  }
}
