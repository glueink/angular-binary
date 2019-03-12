import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ScoreService } from 'src/app/score.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BinaryService } from '../binary.service';

@Component({
  selector: 'app-binary-result',
  templateUrl: './binary-result.component.html',
  styleUrls: ['./binary-result.component.scss']
})
export class BinaryResultComponent implements OnInit, AfterContentInit {
  // icons
  faCheck = faCheck;
  faTimes = faTimes;

  isWinner: boolean = false;
  result;

  constructor(private scoreService: ScoreService, private binaryService: BinaryService) { }

  ngOnInit() {
    this.binaryService.binaryResult.subscribe(
      data => {
        this.result = data;
        // console.log(this.result);
      }
    );
  }

  ngAfterContentInit() {
    switch (this.result.bet) {
      case 'less': {
        if (this.result.newCurrency.rate_float < this.result.betCurrency.rate_float) {
          this.isWinner = true;
          this.scoreService.increaseScore(this.result.betPrice / this.result.newCurrency.rate_float);
        } else {
          this.isWinner = false;
          this.scoreService.decreaseScore(this.result.betPrice / this.result.newCurrency.rate_float);
        }
        break;
      }
      case 'more': {
        if (this.result.newCurrency.rate_float > this.result.betCurrency.rate_float) {
          this.isWinner = true;
          this.scoreService.increaseScore(this.result.betPrice / this.result.newCurrency.rate_float);
        } else {
          this.isWinner = false;
          this.scoreService.decreaseScore(this.result.betPrice / this.result.newCurrency.rate_float);
        }
        break;
      }
      default: {
        console.log('Error');
        break;
      }
    }
  }

  return() {
    this.binaryService.showResult.next(false);
  }
}
