import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestService } from '../request/request.service';
import { RequestUrls } from '../request/request-urls.const';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private requestService: RequestService) { }

  restartBot(): Observable<any> {
    return this.requestService.get(RequestUrls.RESTART);
  }

  postToken(token): Observable<any> {
    return this.requestService.post(RequestUrls.TOKEN, token);
  }
}