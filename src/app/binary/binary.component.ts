import { Component, OnInit } from '@angular/core';
import { BinaryService } from './binary.service';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit {

  showResult: boolean;

  constructor(private binaryService: BinaryService) {}

  ngOnInit() {
    this.binaryService.showResult.subscribe(
      data => this.showResult = data
    );
  }

}
