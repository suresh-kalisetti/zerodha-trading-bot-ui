import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradeService } from 'src/app/services/trade/trade.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { take } from 'rxjs/operators';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logType: string = '';
  logDate: string = '';
  logs: TreeNode[] = [];

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  constructor(private route: ActivatedRoute,
    private tradeService: TradeService) { }

  ngOnInit() {
    this.getDate();
    this.route.params.subscribe(params => {
      this.logType = params['type'];
      this.tradeService.getLogs(this.logType, this.logDate).pipe(take(1)).subscribe(result => {
        this.formatLogs(result.logs);
      })
    });
  }

  getDate() {
    const date = new Date();
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    this.logDate = date.getFullYear().toString() + "-" + month + "-" + day;
  }

  formatLogs(logs: string[]) {
    logs.forEach(log => {
      if (log) {
        const time = log.split('\t')[0].split('T')[1];
        const message = log.split('\t')[1];
        const parent = time.substr(0, 2);
        const child = time.substr(3, 9);
        if (this.logs.findIndex(x => x.name == parent) != -1) {
          this.logs.filter(x => x.name == parent)[0].children.push({
            name: child + "-" + message
          })
        } else {
          this.logs.push({
            name: parent,
            children: [
              {
                name: child + "-" + message
              }
            ]
          })
        }
      }
    });
    console.log(this.logs);
    this.dataSource.data = this.logs;
  }
}
