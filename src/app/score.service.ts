import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScoreService {

  scoreChanged = new BehaviorSubject<number>(120);

  constructor() { }

  increaseScore(value: number) {
    const currentScore = this.scoreChanged.getValue();
    const updatedScore = currentScore + value;
    this.scoreChanged.next(updatedScore);
  }

  decreaseScore(value: number) {
    const currentScore = this.scoreChanged.getValue();
    const updatedScore = currentScore - value;
    this.scoreChanged.next(updatedScore);
  }
}
