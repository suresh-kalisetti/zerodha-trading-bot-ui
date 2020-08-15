import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from '../request/request.service';
import { RequestUrls } from '../request/request-urls.const';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private requestService: RequestService) { }

  botHealth() {
    return this.requestService.get(RequestUrls.HEALTH);
  }

  restartBot(): Observable<any> {
    return this.requestService.get(RequestUrls.RESTART);
  }

  getLogs(type: string, date: string): Observable<any> {
    const url = RequestUrls.LOGS.replace("{type}", type).replace("{date}", date);
    return this.requestService.get(url);
  }

  postRequestToken(token: string) {
    return this.requestService.post(RequestUrls.TOKEN, {token});
  }
}
