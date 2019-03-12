import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, pluck, startWith, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { of, interval, Subject, BehaviorSubject } from 'rxjs';
import { isEqual } from 'lodash';

@Injectable({ providedIn: 'root' })
export class BinaryService {

  binaryResult = new BehaviorSubject<any>(null);
  showResult = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getCurrencyData() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    return this.http.get(url).pipe(
      pluck('bpi')
    );
  }

  pollingCurrencyData() {
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => this.getCurrencyData()),
      distinctUntilChanged((a, b) => isEqual(a, b)),
      catchError(error => of({ error }))
    );
  }
}
