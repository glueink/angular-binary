import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../score.service';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBtc } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // icons
  faUserCircle = faUserCircle;
  faBtc = faBtc;

  score: any;

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.scoreService.scoreChanged.subscribe(async data => {
      this.score = await data;
    });
  }

}
