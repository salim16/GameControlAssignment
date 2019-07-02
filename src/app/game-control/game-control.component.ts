import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  randomNumber: number;

  @Output('randomNumberEvent') intervalFired = new EventEmitter<number>();

  @Output('stopEvent') stopEvent = new EventEmitter<Boolean>();

  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * 100 + 1);
      this.intervalFired.emit(this.randomNumber);
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

  onStopGame() {
    clearInterval(this.interval);
    this.stopEvent.emit(true);
  }

}
