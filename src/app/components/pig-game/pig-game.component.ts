import { Component, OnInit } from '@angular/core';
import Player from 'src/app/models/player';

@Component({
  selector: 'app-pig-game',
  templateUrl: './pig-game.component.html',
  styleUrls: ['./pig-game.component.css']
})
export class PigGameComponent implements OnInit {

  player1 = new Player();
  player2 = new Player();
  imgPath: string;

  constructor() { }

  ngOnInit(): void {
    this.player1.name = "Player 1";
    this.player1.isActive = true;
    this.player2.name = "Player 2"
  }


  newGame () {
    //sets everything to 0 // no window.reload()
  }

  rollDice () {
    //rolls random number
    // every roll adds points to current score
    //if dice gets 1 current score becomes 0 and its next player turn
    // show dice score (remove hidden class)
    let diceRoll: number;
    if (this.player1.isActive) {
      diceRoll = this.getRandomNumber();
      if (diceRoll !== 1) {
        this.player1.currentScore += diceRoll;
        this.imgPath = `https://pig-game-v2.netlify.app/dice-${diceRoll}.png`;
      }
      else {
        this.player1.currentScore = 0;
        this.imgPath = `https://pig-game-v2.netlify.app/dice-${diceRoll}.png`;
        this.player1.isActive = false;
        this.player2.isActive = true;
      }
    }

    else if (this.player2.isActive) {
      diceRoll = this.getRandomNumber();
      if (diceRoll !== 1) {
        this.player2.currentScore += diceRoll
        this.imgPath = `https://pig-game-v2.netlify.app/dice-${diceRoll}.png`;
      }
      else {
        this.player2.currentScore = 0;
        this.imgPath = `https://pig-game-v2.netlify.app/dice-${diceRoll}.png`;
        this.player2.isActive = false;
        this.player1.isActive = true;
      }
    }
  }

  holdScore () {
    //adds current score to totalScore
    //next player turn
    
    this.player1.currentScore = 0;
    this.player2.currentScore = 0;
    
    if (this.player1.isActive) {
      this.player1.isActive = false;
      this.player2.isActive = true;

      //not working properly
      //this.player2.totalScore += this.player2.currentScore;
      //this.player2.currentScore = 0;
    }
    else {
      this.player1.isActive = true;
      this.player2.isActive = false;

      //not working properly
      //this.player1.totalScore += this.player1.currentScore;
      //this.player1.currentScore = 0;
    }
  }

  getRandomNumber() {
    let rnd = Math.floor(Math.random() * 6 + 1);
    console.log(rnd)
    return rnd;
  }
}
