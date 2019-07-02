import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // evens: Array<Number> = [];
  // odds: number[] = [];
  numbers: number[] = [];

  // onRandomNumberGeneratorEvent(randomNumber: number) {
  //   if(randomNumber % 2 === 0) {
  //     this.evens.push(randomNumber);
  //   } else {
  //     this.odds.push(randomNumber);
  //   }
  // }

  // onStopGameEvent(stopGame: boolean) {
  //   if(stopGame === true) {
  //     this.evens = [];
  //     this.odds = [];
  //   }
  // }

  onRandomNumberGeneratorEvent(randomNumber: number) {
      this.numbers.push(randomNumber);
  }

  onStopGameEvent(stopGame: boolean) {
    if(stopGame === true) {
      this.numbers = [];
    }
  }
}
