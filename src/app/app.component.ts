import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper-scissors';

  userScore = 0;
  pcScore = 0;
  userSelected!: string;
  pcSelected!: string;

  choices = ['rock', 'paper', 'scissors'];

  play(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log( this.userSelected);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 3)
      this.pcSelected = this.choices[randomNum];
      console.log( this.choices);
      this.checkResult();
    }, 1000)
  }

  clearField() {
    setTimeout(() => {
      this.userSelected = '';
      this.pcSelected = '';
    }, 1500);
  }

  win(user: any, pc: any) {
    this.userScore++;
    this.userSelected = user;
    this.pcSelected = pc;
    this.clearField();
  }

  lose(user: any, pc: any) {
    this.pcScore++;
    this.userSelected = user;
    this.pcSelected = pc;
    this.clearField();
  }

  draw(user: any, pc: any) {
    this.userSelected = user;
    this.pcSelected = pc;
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const pcChoice = this.pcSelected;

    if (userChoice + pcChoice == 'rockscissors' || userChoice + pcChoice == 'paperrock' || userChoice + pcChoice == 'scissorspaper') {
      this.win(userChoice, pcChoice);
    }
    else if ( userChoice + pcChoice == 'rockpaper' || userChoice + pcChoice == 'scissorsrock' || userChoice + pcChoice == 'paperscissors') {
        this.lose(userChoice, pcChoice);
    }
    else {
      this.draw(userChoice, pcChoice);
    }
  }

  reset() {
    this.pcScore = 0;
    this.userScore = 0;
  }
}
