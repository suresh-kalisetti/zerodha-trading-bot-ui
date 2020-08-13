import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpclient: HttpClient,
    private spinner: NgxSpinnerService) { }

  get(url: string): Observable<any> {
    this.spinner.show();
    return this.httpclient.get(url).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }

  post(url: string, body: any): Observable<any> {
    this.spinner.show();
    return this.httpclient.post(url, body).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }

  put(url: string, body: any): Observable<any> {
    this.spinner.show();
    return this.httpclient.put(url, body).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}