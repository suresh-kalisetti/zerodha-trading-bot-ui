import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './components/logs/logs.component';
import { LogsRoutingModule } from './logs-routing.module';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    LogsRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LogsModule { }
