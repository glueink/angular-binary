import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faCheck, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faBtc } from '@fortawesome/free-brands-svg-icons';

import { Observable, timer } from 'rxjs';
import { tap, takeUntil, skip, take } from 'rxjs/operators';

import { BinaryService } from './../binary.service';
import { BinaryValidator } from '../binary.directive';

@Component({
  selector: 'app-binary-form',
  templateUrl: './binary-form.component.html',
  styleUrls: ['./binary-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BinaryFormComponent implements OnInit {
  // Icons
  faCheck = faCheck;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  faBtc = faBtc;

  currentRate;

  isLoading: boolean = false;
  binaryForm: FormGroup;
  currencies$: Observable<any>;

  constructor(private binaryService: BinaryService, private formBuilder: FormBuilder) {}

  ngOnInit() {

    // Observables
    this.currencies$ = this.binaryService.pollingCurrencyData().pipe(
      tap(_ => this.binaryForm.reset()),
    );

    // Form
    this.initForm();
  }

  submit() {
    this.binaryForm.disable();

    this.isLoading = true;

    const betCurrency = this.currency;
    const betPrice = this.price;
    const bet = this.bet;
    let newCurrency;

    this.binaryService.pollingCurrencyData().pipe(
      takeUntil(timer(80000)),
      skip(1),
      take(1),
    ).subscribe(
      data => {
        newCurrency = data[betCurrency.code];
      },
      err => { console.log(err); },
      () => {
        this.binaryForm.enable();
        this.isLoading = false;
        this.binaryService.showResult.next(true);

        this.binaryService.binaryResult.next({
          betCurrency,
          betPrice,
          bet,
          newCurrency,
        });
      }
    );
  }

  get currency() {
    return this.binaryForm.get('currencyControl').value;
  }
  get bet() {
    return this.binaryForm.get('betControl').value;
  }
  get price() {
    return this.binaryForm.get('priceControl').value;
  }

  private initForm() {
    this.binaryForm = this.formBuilder.group({
      currencyControl: [null, [Validators.required]],
      priceControl: [0, [Validators.required]],
      betControl: [null, [Validators.required]],
      checkControl: [false, [Validators.requiredTrue]]
    }, { validators: BinaryValidator });

    this.binaryForm.get('currencyControl').valueChanges.subscribe(data => {
      this.currentRate = data;
    });
  }

}
