import { Component, OnInit } from '@angular/core';
import { Player } from '../api/player';
import { Tournament } from '../api/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  public tournament: Tournament;

  public chris: Player;
  public timo: Player;
  public julien: Player;
  public flo: Player;
  public bene: Player;

  constructor() { }

  ngOnInit() {
  }

  //TODO: Assign goals to tournament (i.e. by adding a matchnumber)

  calculateTournamentResult(goalsPlayer1: number, goalsPlayer2: number, player1: Player, player2: Player) {

    if (goalsPlayer1 && goalsPlayer2 != undefined) {

      player1.goals = player1.goals + goalsPlayer1;
      player1.goalsAgainst = player1.goalsAgainst + goalsPlayer2;
      player1.goalDiff = player1.goalDiff + goalsPlayer1 - goalsPlayer2;

      player2.goals = player2.goals + goalsPlayer2;
      player2.goalsAgainst = player2.goalsAgainst + goalsPlayer1;
      player2.goalDiff = player2.goalDiff + goalsPlayer2 - goalsPlayer1;

      if (goalsPlayer1 > goalsPlayer2) {
        return player1.points = player1.points + 3;
      }

      if (goalsPlayer1 < goalsPlayer2) {
        return player2.points = player2.points + 3;
      }

      if (goalsPlayer1 == goalsPlayer2) {
        player1.points = player1.points + 1;
        player2.points = player2.points + 1;
        return
      }

    } else {
      return
    }
  }



  update(team) {

  }

  updateResult(matchResult) {

  }
}
