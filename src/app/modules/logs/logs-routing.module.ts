import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsComponent } from './components/logs/logs.component';


const routes: Routes = [
  {
    path: ':type',
    component: LogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }